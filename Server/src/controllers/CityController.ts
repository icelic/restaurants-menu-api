import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { City } from '../models/City';

class CityController {
  async getByCountyId(req: Request, res: Response) {
    const { countyId } = req.params;

    const cityRepository = getRepository(City);
    const cities = await cityRepository.find({
      where: {
        county: {
          id: countyId,
        },
      },
    });

    res.send(cities);
  }
}

export default new CityController();
