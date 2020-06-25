import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Menu } from '../models/Menu';
import { uploadToS3 } from '../utils';
import { Attachment } from '../models/Attachment';

class MenuController {
  async all(request: Request, response: Response) {
    const menuRepository = getRepository(Menu);

    if (request.query.restaurantId) {
      const menu = await menuRepository.findOne({
        where: {
          restaurant: {
            id: request.query.restaurantId,
          },
        },
      });
      response.send(menu);
    }

    const menus = await menuRepository.find({
      relations: ['restaurant', 'attachments'],
    });
    response.send(menus);
  }

  async uploadMenuImage(request: Request, response: Response) {
    uploadToS3(
      (request as any).file,
      `menus/${request.params.restaurantId.toString()}`,
      request.params.menuId.toString(),
    ).then(async (data) => {
      const newAttachment = new Attachment();
      newAttachment.url = data.Key;
      const menu = await getRepository(Menu).findOne(
        request.params.menuId.toString(),
      );
      // check if menu exists and store key to get the image
      if (menu) {
        newAttachment.menu = menu;
        const attachmentRepository = getRepository(Attachment);
        attachmentRepository.save(newAttachment);
      }
    });

    return response.status(200).send({
      message: 'File saved successfully',
      fileUrlPrefix: process.env.AWS_PUBLIC_URL_PREFIX,
    });
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
