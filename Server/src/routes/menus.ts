import express, { Router } from 'express';
import multer from 'multer';

import MenuController from '../controllers/MenuController';

const menuRouter: Router = express.Router();
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

menuRouter.get('/', MenuController.all);
menuRouter.post(
  '/:restaurantId/upload/:menuId',
  upload.single('image'),
  MenuController.uploadMenuImage,
);

export default menuRouter;
