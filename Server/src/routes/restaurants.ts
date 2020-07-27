import express, { Router } from 'express';
import multer from 'multer';
import RestaurantController from '../controllers/RestaurantController';

const restaurantRouter: Router = express.Router();
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

restaurantRouter.get('/', RestaurantController.find);
restaurantRouter.get('/:restaurantId/', RestaurantController.one);
restaurantRouter.post(
  '/:restaurantId/upload',
  upload.single('image'),
  RestaurantController.uploadRestaurantImage,
);
restaurantRouter.post('/', RestaurantController.saveToIndex)

export default restaurantRouter;
