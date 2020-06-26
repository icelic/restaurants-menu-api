import express, { Router } from 'express';
import menusRouter from './menus';
import restaurantRouter from './restaurants';
import userRouter from './user';

export const router: Router = express.Router();

router.use('/menus', menusRouter);
router.use('/restaurants', restaurantRouter);
router.use('/user', userRouter);
