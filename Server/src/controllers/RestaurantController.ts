import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Restaurant } from '../models/Restaurant';
import { uploadToS3 } from '../utils';
import fs from 'fs';

// TODO decide where to put client node
// TODO define host and port in a different file
import { Client } from '@elastic/elasticsearch';
const client = new Client({
  node: process.env.API_HOST,
  auth: {
    username: 'elastic',
    password: process.env.ES_PASSWORD,
  },
  ssl: {
    ca: fs.readFileSync('./certs/fullchain.pem'),
    rejectUnauthorized: false,
  },
});
console.log('Password: ', process.env.ES_PASSWORD);
console.log('Host: ', process.env.API_HOST);

class RestaurantController {
  async find(request: Request, response: Response) {
    // retrieve data from elastic search if query value is defined
    if (request.query.value) {
      return client
        .search({
          // TODO define indexes and fields in a different file
          index: 'restaurants',
          body: {
            query: {
              query_string: {
                fields: ['label', 'location'],
                // find everything that contains the given value
                query: '*' + request.query.value + '*',
              },
            },
          },
        })
        .then((data) => response.json(data.body.hits.hits))
        .catch((error) => console.log(error));
    }

    const restaurantRepository = getRepository(Restaurant);
    const restaurants = await restaurantRepository.find({
      relations: ['menus', 'foodTypes'],
    });
    restaurants.forEach((value: Restaurant) => {
      if (value.imageKey !== '') {
        value.imageKey = process.env.AWS_PUBLIC_URL_PREFIX + value.imageKey;
      }
    });

    response.send(restaurants);
  }

  async saveToIndex(request: Request, response: Response) {
    client
      .index({
        // TODO define indexes in a different file
        index: 'restaurants',
        body: {
          label: request.body.label,
          location: request.body.location,
          imageKey: request.body.imageKey,
          menus: request.body.menus,
          foodType: request.body.foodType,
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
    const restaurant = await getRepository(Restaurant).findOne(
      request.params.id,
    );

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
