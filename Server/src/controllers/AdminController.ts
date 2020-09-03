import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User';
import { Menu } from '../models/Menu';

import { Restaurant } from '../models/Restaurant';
import { generateAccessToken } from '../utils/jwt';
import { uploadToS3 } from '../utils/upload';
import { Attachment } from '../models/Attachment';
import { City } from '../models/City';

// @TODO this all should probably be separate admin backend

class AdminController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await getRepository(User).findOne({ email });

    if (!user) {
      return res.status(400).send('Incorrect email or password').end();
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send('Incorrect email or password').end();
    }

    user.token = generateAccessToken({ id: user.id, email: user.email });

    delete user.password;

    return res.send(user);
  }

  async createRestaurantAndMenus(req: Request, res: Response) {
    const { label, location, locationAddress, cityId } = req.body;

    if (!label || !location || !locationAddress) {
      return res
        .status(400)
        .json('Request missing name, location or location address!')
        .end();
    }
    const restaurantCity = await getRepository(City).findOne({
      where: { id: cityId },
    });

    const createdRestaurant = await getRepository(Restaurant).save({
      label,
      location,
      locationAddress,
      imageKey: '',
      city: restaurantCity,
    });

    if ((req as any).files) {
      if ((req as any).files['restaurantImage']) {
        uploadToS3(
          (req as any).files['restaurantImage'][0],
          `restaurants/${createdRestaurant.id}`,
          'restaurantImage',
        ).then(async (data) => {
          await getRepository(Restaurant).save({
            id: createdRestaurant.id,
            imageKey: data.Key,
          });
        });
      }

      const menuImages = (req as any).files['menuImages'];

      if (menuImages) {
        const createdMenu = await getRepository(Menu).save({
          restaurant: createdRestaurant,
          label: `${createdRestaurant.label} menu`,
        });

        await Promise.all(
          menuImages.map((image) =>
            uploadToS3(
              image,
              `restaurants/${createdRestaurant.id}/menus/main`,
              'menuImage',
            ).then(async (data) => {
              await getRepository(Attachment).save({
                menu: createdMenu,
                url: data.Key,
              });
            }),
          ),
        );
      }
    }

    return res.json(createdRestaurant).end();
  }
}

export default new AdminController();
