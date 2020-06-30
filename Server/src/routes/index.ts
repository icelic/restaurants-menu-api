import express, { Router } from 'express';
import menusRouter from './menus';
import restaurantRouter from './restaurants';

export const router: Router = express.Router();

router.use('/api/menus', menusRouter);
router.use('/api/restaurants', restaurantRouter);
