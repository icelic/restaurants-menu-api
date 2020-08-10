import adminRouter from './admin';
import express, { Router } from 'express';
import menusRouter from './menus';
import restaurantRouter from './restaurants';
import userRouter from './user';

export const router: Router = express.Router();

router.use('/api/admin', adminRouter);
router.use('/api/menus', menusRouter);
router.use('/api/restaurants', restaurantRouter);
router.use('/api/user', userRouter);
