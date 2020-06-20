import 'reflect-metadata';
import { createConnection } from 'typeorm';
import 'babel-core/register';
import 'babel-polyfill';
import config from './config';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { router } from './routes';
import http from 'http';
import https from 'https';
import fs from 'fs';

createConnection()
  .then(() => {
    console.log('Database connection created!');

    const httpsPort = 443;
    const httpsOptions = {
      cert: fs.readFileSync('./certs/fullchain.pem'),
      key: fs.readFileSync('./certs/privkey.pem'),
    };

    const app = express();

    app.use(logger('dev'));
    app.enable('trust proxy');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/', router);

    app.listen(config.port, () =>
      console.log(`Listening on port ${config.port}`),
    );
    const httpsServer = https.createServer(httpsOptions, app);
    httpsServer.listen(httpsPort, () => {
      console.log(`Listening (SSL) on port ${httpsPort}`);
    });
  })
  .catch((error) =>
    // eslint-disable-next-line no-console
    console.log('Error: ', error),
  );
