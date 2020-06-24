import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Restaurant } from '../models/Restaurant';
import { uploadToS3 } from '../utils';

class RestaurantController {
  async all(request: Request, response: Response) {
    const restaurantRepository = getRepository(Restaurant);
    const restaurants = await restaurantRepository.find({
      relations: ['menus', 'menus.attachments', 'foodTypes'],
    });

    response.send(restaurants);
  }

  async uploadRestaurantImage(request: Request, response: Response) {
    uploadToS3(
      (request as any).file,
      'restaurants' + '/' + request.params.restaurantId.toString(),
      'restaurantImage',
    ).then((data) => {
      //   TODO: Save values in the database
      console.log('## location', data.Location);
      console.log('## key', data.Key);
    });

    return response
      .status(200)
      .json({ status: 200, message: 'File saved successfully' });
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
