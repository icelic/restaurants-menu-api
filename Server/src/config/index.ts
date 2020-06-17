const appEnv = process.env.APP_ENV || 'development';

const config = {
  env: appEnv,
  port: process.env.PORT || 8080,
};

Object.assign(config, require(`./${config.env}`).default);

export default config;
