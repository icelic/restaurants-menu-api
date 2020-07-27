import express, { Router } from 'express';

import RestaurantController from '../controllers/RestaurantController';
import { upload } from '../utils/upload';

const restaurantRouter: Router = express.Router();

restaurantRouter.get('/', RestaurantController.find);
restaurantRouter.get('/:restaurantId/', RestaurantController.one);
restaurantRouter.post(
  '/:restaurantId/upload',
  upload.single('image'),
  RestaurantController.uploadRestaurantImage,
);
restaurantRouter.post('/', RestaurantController.saveToIndex);

export default restaurantRouter;
