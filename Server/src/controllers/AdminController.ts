import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User';
import { generateAccessToken } from '../utils/jwt';

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
}

export default new AdminController();
