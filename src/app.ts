import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { router } from './routes';

const app = express();

app.use(logger('dev'));
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

export default app;
