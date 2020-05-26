import express, { Router } from 'express';
import menuController from '../controllers/menuController';

const menuRouter: Router = express.Router();

/* GET all menus */
menuRouter.get('/', menuController.all());

export default menuRouter;
