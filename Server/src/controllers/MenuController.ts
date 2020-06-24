import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Menu } from '../models/Menu';
import { uploadToS3 } from '../utils';

class MenuController {
  async all(request: Request, response: Response) {
    const menuRepository = getRepository(Menu);
    const menus = await menuRepository.find({
      relations: ['restaurant'],
    });

    response.send(menus);
  }

  async uploadMenuImage(request: Request, response: Response) {
    uploadToS3(
      (request as any).file,
      'menus' + '/' + request.params.restaurantId.toString(),
      'menuImage',
    );
    return response
      .status(200)
      .json({ status: 200, message: 'File saved successfully' });
  }

  async one(request: Request, response: Response) {
    const menu = await getRepository(Menu).findOne(request.params.id);

    return response.send(menu);
  }

  async save(request: Request, response: Response) {
    const createdMenu = await getRepository(Menu).save(request.body);

    return response.send(createdMenu);
  }

  async remove(request: Request, response: Response) {
    let menuToRemove = await getRepository(Menu).findOne(request.params.id);

    if (menuToRemove) {
      await getRepository(Menu).remove(menuToRemove);
    }

    response.sendStatus(204);
  }
}

export default new MenuController();
