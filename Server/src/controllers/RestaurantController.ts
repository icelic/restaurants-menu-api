import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Restaurant } from '../models/Restaurant';

class RestaurantController {
  async all(request: Request, response: Response) {
    const restaurantRepository = getRepository(Restaurant);
    const restaurants = await restaurantRepository.find({
      relations: ['menus', 'menus.attachments', 'foodTypes'],
    });

    response.send(restaurants);
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
