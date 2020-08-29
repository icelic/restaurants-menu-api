import express, { Router } from 'express';

import CountyController from '../controllers/CountyController';
import CityController from '../controllers/CityController';

const countiesRouter: Router = express.Router();

countiesRouter.get('/', CountyController.all);
countiesRouter.get('/:countyId/cities', CityController.getByCountyId);

export default countiesRouter;
