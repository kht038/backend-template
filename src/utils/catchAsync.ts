import { Request, Response, NextFunction } from 'express';

export const catchAsync = (asyncFunc: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await asyncFunc(req, res, next);
    } catch (e) {
      next(e);
    }
  };
};
