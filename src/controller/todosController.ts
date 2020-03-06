import { Request, Response, NextFunction } from "express";
import Icontroller from "./interfaceController";

class TodosController implements Icontroller {
  index(req: Request, res: Response) {
    return res.send("get all todos");
  }
  show(req: Request, res: Response, next: NextFunction) {
    return res.send("get todos by id");
  }
  create(req: Request, res: Response, next: NextFunction) {
    return res.send("get all todos");
  }
  update(req: Request, res: Response, next: NextFunction) {
    return res.send("get all todos");
  }
  remove(req: Request, res: Response, next: NextFunction) {
    return res.send("get all todos");
  }
}

export default new TodosController();
