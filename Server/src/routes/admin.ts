import express, { Router } from 'express';

import AdminController from '../controllers/AdminController';

const adminRouter: Router = express.Router();

adminRouter.post('/login', AdminController.login);

export default adminRouter;
