import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User';
import { generateAccessToken } from '../utils/jwt';
import { Restaurant } from '../models/Restaurant';
import { uploadToS3 } from '../utils/upload';

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

  async createRestaurant(req: Request, res: Response) {
    const { label, location } = req.body;

    if (!label || !location) {
      return res.status(400).json('Request missing name or location!').end();
    }

    const createdRestaurant = await getRepository(Restaurant).save({
      label,
      location,
      locationAddress: '',
      imageKey: '',
    });

    if ((req as any).file) {
      uploadToS3(
        (req as any).file,
        `restaurants/${createdRestaurant.id}`,
        'restaurantImage',
      ).then(async (data) => {
        await getRepository(Restaurant).save({
          id: createdRestaurant.id,
          imageKey: data.Key,
        });
      });
    }

    return res.json(createdRestaurant).end();
  }
}

export default new AdminController();
