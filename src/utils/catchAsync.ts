import { Request, Response, NextFunction } from "express";

module.exports = (fn: any): any => {
  return (req: Request, res: Response, next: NextFunction): any => {
    fn(req, res, next).catch((err: any) => next(err));
  };
};
