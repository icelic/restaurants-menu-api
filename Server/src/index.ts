import 'reflect-metadata';
import { createConnection } from 'typeorm';
import 'babel-core/register';
import 'babel-polyfill';
import config from './config';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { router } from './routes';

createConnection()
  .then(() => {
    console.log('Database connection created!');

    const app = express();

    app.use(logger('dev'));
    app.enable('trust proxy');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/', router);

    app.listen(config.port, () =>
      console.log(`Listening on port ${config.port}`),
    );
  })
  .catch((error) =>
    // eslint-disable-next-line no-console
    console.log('Error: ', error),
  );
