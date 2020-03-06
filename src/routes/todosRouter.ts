import { Request, Response } from "express";
import BaseRouter from "./baseRouter";

class TodosRouter extends BaseRouter {
  routes(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("todos routes");
    });
  }
}

export default new TodosRouter().router;
