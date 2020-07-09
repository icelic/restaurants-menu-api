import jwt from 'jsonwebtoken';
import config from '../config';

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401).end();
  }

  return jwt.verify(token, config.jwt.secret, (error, user) => {
    if (error) {
      return res.sendStatus(403).end();
    }

    req.user = user;
    return next();
  });
}

export default authenticate;
