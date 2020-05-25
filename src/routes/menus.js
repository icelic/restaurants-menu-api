import express from 'express';
import { getConnection } from 'typeorm';

const router = express.Router();

/* GET all menus */
router.get('/', async function (req, res) {
  const connection = await getConnection();

  const menuRepository = connection.getRepository('Menu');
  const allMenus = await menuRepository.find();

  res.send(allMenus);
});

export default router;
