import { getRepository } from 'typeorm';
import { Menu } from '../model/Menu';

export class MenuController {
  menuRepository = getRepository(Menu);

  async all(request, response, next) {
    return this.menuRepository.find();
  }

  async one(request, response, next) {
    return this.menuRepository.findOne(request.params.id);
  }

  async save(request, response, next) {
    return this.menuRepository.save(request.body);
  }

  async remove(request, response, next) {
    let menuToRemove = await this.menuRepository.findOne(request.params.id);
    await this.menuRepository.remove(menuToRemove);
  }
}
