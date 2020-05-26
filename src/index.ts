import { ConnectionOptions, createConnection } from 'typeorm';
import 'babel-core/register';
import 'babel-polyfill';
import config from './config';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  // @ts-ignore
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [__dirname + '/../**/*.{ts,js}'],
  migrations: ['src/migrations/**/*.{ts,js}'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migrations',
  },
};

createConnection(connectionOptions)
  .then(() => {
    const app = require('./app');

    app.listen(config.port, () =>
      console.log(`Listening on port ${config.port}`),
    );
  })
  .catch(function (error) {
    // eslint-disable-next-line no-console
    console.log('Error: ', error);
  });
