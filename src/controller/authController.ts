import { Request, Response, NextFunction } from "express";
import Icontroller from "./interfaceController";

class AuthController implements Icontroller {
  index(req: Request, res: Response): Response {
    return res.send("hello world");
  }
  // index(req: Request, res: Response, next: NextFunction) {
  //   return res.send({
  //     status: "success",
  //     message: "hello world"
  //   });
  // }
  // show(req: Request, res: Response, next: NextFunction): Response {
  //   throw new Error("Method not implemented.");
  // }
  // create(req: Request, res: Response, next: NextFunction): Response {
  //   throw new Error("Method not implemented.");
  // }
  // update(req: Request, res: Response, next: NextFunction): Response {
  //   throw new Error("Method not implemented.");
  // }
  // remove(req: Request, res: Response, next: NextFunction): Response {
  //   throw new Error("Method not implemented.");
  // }
}

export default new AuthController();
