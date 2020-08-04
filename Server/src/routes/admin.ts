import express, { Router } from 'express';

import AdminController from '../controllers/AdminController';
import { upload } from '../utils/upload';

const imageUpload = upload.fields([
  { name: 'restaurantImage', maxCount: 1 },
  { name: 'menuImages' },
]);

const adminRouter: Router = express.Router();

adminRouter.post('/login', AdminController.login);

adminRouter.post(
  '/restaurants',
  imageUpload,
  AdminController.createRestaurantAndMenus,
);

export default adminRouter;
