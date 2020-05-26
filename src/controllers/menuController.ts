import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Menu } from '../models/Menu';
import { asyncMiddleware } from '../shared/express/asyncMiddleware';

export class menuController {
  private menuRepository = getRepository(Menu);

  all() {
    return asyncMiddleware(
      async (req: Request, res: Response) => await this.menuRepository.find(),
    );
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.menuRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.menuRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let menuToRemove = await this.menuRepository.findOne(request.params.id);

    if (menuToRemove) {
      await this.menuRepository.remove(menuToRemove);
    }
  }
}

export default new menuController();
