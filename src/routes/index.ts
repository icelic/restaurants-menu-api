import express, { Router } from 'express';
import menusRouter from './menus';
import restaurantRouter from './restaurants';

export const router: Router = express.Router();

router.use('/menus', menusRouter);
router.use('/restaurants', restaurantRouter);
