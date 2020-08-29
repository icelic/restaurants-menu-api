import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { County } from '../models/County';

class CountyController {
  async all(request: Request, response: Response) {
    const countyRepository = getRepository(County);
    const counties = await countyRepository.find();

    response.send(counties);
  }
}

export default new CountyController();
