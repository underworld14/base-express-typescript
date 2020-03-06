import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/HttpException";

function GlobalError(err: HttpException, req: Request, res: Response, next: NextFunction) {
  console.log("enter error");
  if (process.env.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }

  console.log(err);
  return res.status(500).json({
    status: "error",
    message: "something went very wrong"
  });
}

export default GlobalError;
