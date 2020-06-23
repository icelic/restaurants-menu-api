import express, { Router } from 'express';
import MenuController from '../controllers/MenuController';

const menuRouter: Router = express.Router();

menuRouter.get('/', MenuController.all);

export default menuRouter;
