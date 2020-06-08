import express, { Router } from 'express';
import RestaurantController from '../controllers/RestaurantController';

const restaurantRouter: Router = express.Router();

restaurantRouter.get('/', RestaurantController.all);

export default restaurantRouter;
