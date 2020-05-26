import { NextFunction, Request, Response } from 'express';

const asyncMiddleware = (fn: any) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  fn(req, res)
    .then(() => next)
    .catch(next)
    .finally(() => {
      if (!res.headersSent) {
        next();
      }
    });
};

export { asyncMiddleware };
