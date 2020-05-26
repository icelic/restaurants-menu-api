import express, { Router } from 'express';
import menusRouter from './menus';

export const router: Router = express.Router();

router.use('/menus', menusRouter);
