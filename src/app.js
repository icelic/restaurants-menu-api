import express from 'express';
import { createConnection } from 'typeorm';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { router } from './routes/index';

const app = express();

createConnection({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [__dirname + '/entity/**/*.{js,ts}'],
  migrations: ['src/migration/**/*.js'],
  subscribers: ['src/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
}).catch(function (error) {
  // eslint-disable-next-line no-console
  console.log('Error: ', error);
});

app.use(logger('dev'));
app.enable('trust proxy');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

module.exports = app;
