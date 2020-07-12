const appEnv = process.env.APP_ENV || 'development';

const config = {
  env: appEnv,
  port: process.env.PORT || 8080,
  jwt: {
    secret: process.env.ACCESS_TOKEN_SECRET,
    expiresIn: 24 * 60 * 60, // expires in 24 h
  },
};

Object.assign(config, require(`./${config.env}`).default);

export default config;
