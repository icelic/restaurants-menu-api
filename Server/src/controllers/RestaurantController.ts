import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Restaurant } from '../models/Restaurant';
import { uploadToS3 } from '../utils/upload';
import { addAwsPublicUrlPrefixToImageKey } from '../utils/addAwsPublicUrlPrefixToImageKey'
import fs from 'fs';

// TODO decide where to put client node
import { Client } from '@elastic/elasticsearch';
const client = new Client({
  node: process.env.ES_HOST,
  auth: {
    username: 'elastic',
    password: process.env.ES_PASSWORD!,
  },
  ssl: {
    ca: fs.readFileSync('./certs/fullchain.pem'),
    rejectUnauthorized: false,
  },
});

class RestaurantController {
  // TODO: refactor this method
  async find(request: Request, response: Response) {
    const restaurantRepository = getRepository(Restaurant);

    // filter restaurants by county and/or 
    // retrieve data from elastic search if query value is defined
    if (request.query.county) {
      if (request.query.value) {
        return client
        .search({
          // TODO define indexes and fields in a different file
          index: 'restaurants',
          body: {
            query: {
              bool: {
                must: [
                  {
                    query_string: {
                      fields: ['label', 'locationAddress'],
                      // find everything that contains the given value
                      query: '*' + request.query.value + '*',
                    }
                  }
                ],
                filter: [
                  {
                    match: {
                      county: request.query.county
                    }
                  }
                ]
              }
            }
          },
        })
        .then((data) => response.json(data.body.hits.hits.map((restaurant) => restaurant._source)))
        .catch((error) => console.log(error));
      } else {
        let restaurants = await restaurantRepository.createQueryBuilder("restaurant")
        .innerJoinAndSelect("restaurant.city", "city")
        .innerJoinAndSelect("city.county", "county")
        .where("county.label = :label", { label: request.query.county })
        .getMany()
        restaurants = addAwsPublicUrlPrefixToImageKey(restaurants);

        response.send(restaurants);
      }
    } else if (request.query.value) {
      return client
        .search({
          // TODO define indexes and fields in a different file
          index: 'restaurants',
          body: {
            query: {
              query_string: {
                fields: ['label', 'locationAddress'],
                // find everything that contains the given value
                query: '*' + request.query.value + '*',
              },
            },
          },
        })
        .then((data) => response.json(data.body.hits.hits.map((restaurant) => restaurant._source)))
        .catch((error) => console.log(error));
    }

    // all restaurants
    let restaurants = await restaurantRepository.find();
    restaurants = addAwsPublicUrlPrefixToImageKey(restaurants);

    response.send(restaurants);
  }

  async saveToIndex(request: Request, response: Response) {
    client
      .index({
        // TODO define indexes in a different file
        index: 'restaurants',
        body: {
          id: request.body.id,
          label: request.body.label,
          locationAddress: request.body.locationAddress,
          imageKey: request.body.imageKey,
          city: request.body.city,
          county: request.body.county,
        },
      })
      .then((data) => response.json(data.body));
  }

  async uploadRestaurantImage(request: Request, response: Response) {
    uploadToS3(
      (request as any).file,
      `restaurants/${request.params.restaurantId.toString()}`,
      'restaurantImage',
    ).then(async (data) => {
      const restaurant = await getRepository(Restaurant).findOne(
        request.params.restaurantId.toString(),
      );
      // check if menu exists and store key to get the image
      if (restaurant) {
        restaurant.imageKey = data.Key;
        getRepository(Restaurant).save(restaurant);
      }
    });

    return response.status(200).json({
      message: 'File saved successfully',
      fileUrlPrefix: process.env.AWS_PUBLIC_URL_PREFIX,
    });
  }

  async one(request: Request, response: Response) {
    let restaurant = await getRepository(Restaurant).findOne(
      request.params.restaurantId,
      { relations: ['menus', 'menus.attachments'] }
    );

    if (restaurant) {
      if (restaurant.imageKey != '') {
        restaurant.imageKey = process.env.AWS_PUBLIC_URL_PREFIX + restaurant.imageKey;
      }
      if (restaurant.menus[0].attachments) {
        restaurant.menus[0].attachments.forEach((attachment) => {
          attachment.url = process.env.AWS_PUBLIC_URL_PREFIX + attachment.url;
        })
      }
    }

    return response.send(restaurant);
  }

  async save(request: Request, response: Response) {
    const createdRestaurant = await getRepository(Restaurant).save(
      request.body,
    );

    return response.send(createdRestaurant);
  }

  async remove(request: Request, response: Response) {
    let restaurantToRemove = await getRepository(Restaurant).findOne(
      request.params.id,
    );

    if (restaurantToRemove) {
      await getRepository(Restaurant).remove(restaurantToRemove);
    }

    response.sendStatus(204);
  }
}

export default new RestaurantController();
