import { Router, Request, Response } from "express";
import IRouter from "./InterfaceRouter";

class TodosRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("todos routes");
    });
  }
}

export default new TodosRouter().router;
