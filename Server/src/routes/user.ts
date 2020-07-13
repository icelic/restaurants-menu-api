import express, { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter: Router = express.Router();

userRouter.post('/', UserController.save);

userRouter.post('/login', UserController.login);

export default userRouter;
