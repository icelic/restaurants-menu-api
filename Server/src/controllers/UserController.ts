import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User';

class UserController {
  async all(request: Request, response: Response) {
    const users = await getRepository(User).find();

    response.send(users);
  }

  async one(request: Request, response: Response) {
    const user = await getRepository(User).findOne(request.params.id);

    return response.send(user);
  }

  async save(request: Request, response: Response) {
    let user = await getRepository(User).findOne({ email: request.body.email });

    if (!user) {
      user = await getRepository(User).save(request.body);
      return response.send(user)
    }

    return response.sendStatus(409)
  }

  async remove(request: Request, response: Response) {
    let userToRemove = await getRepository(User).findOne(request.params.id);
    
    if (userToRemove) {
      await getRepository(User).remove(userToRemove);
    }

    response.sendStatus(204);
  }
}

export default new UserController();