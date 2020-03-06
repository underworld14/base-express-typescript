import { Request, Response } from "express";
import BaseRouter from "./baseRouter";

class AuthRouter extends BaseRouter {
  routes(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("Hello auth router");
    });

    this.router.post("/register", (req: Request, res: Response) => {
      res.send("Register router");
    });

    this.router.post("/login", (req: Request, res: Response) => {
      res.send("login router");
    });
  }
}

export default new AuthRouter().router;
