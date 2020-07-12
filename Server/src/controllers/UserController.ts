import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

import { User } from '../models/User';
import { generateAccessToken } from '../utils/jwt';

class UserController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json('Request missing email or password param!')
        .end();
    }

    const user = await getRepository(User).findOne({ email });

    if (!user) {
      return res.status(400).json('Invalid email or password').end();
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json('Invalid email or password').end();
    }

    user.token = generateAccessToken({ email });

    delete user.password;

    return res.json(user).end();
  }

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
      return response.send(user);
    }

    return response.sendStatus(409);
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
