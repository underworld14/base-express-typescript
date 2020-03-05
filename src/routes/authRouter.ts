import { Router, Request, Response } from "express";
import IRouter from "./InterfaceRouter";

class AuthRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

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
