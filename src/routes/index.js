import express from 'express';
import menusRouter from './menus';

export const router = express.Router();

router.use('/menus', menusRouter);