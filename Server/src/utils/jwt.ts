import jwt from 'jsonwebtoken';
import config from '../config';

export function generateAccessToken(data) {
  return jwt.sign(data, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
}
