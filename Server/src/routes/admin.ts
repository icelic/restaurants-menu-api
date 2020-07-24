import express, { Router } from 'express';

import AdminController from '../controllers/AdminController';
import { upload } from '../utils/upload';

const adminRouter: Router = express.Router();

adminRouter.post('/login', AdminController.login);

adminRouter.post(
  '/restaurants',
  upload.single('image'),
  AdminController.createRestaurant,
);

export default adminRouter;
