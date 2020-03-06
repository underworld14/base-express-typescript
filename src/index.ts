import path from "path";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// router
import AuthRoutes from "./routes/authRouter";
import TodosRoutes from "./routes/todosRouter";

// common
import HttpException from "./utils/HttpException";
import GlobalError from "./middleware/globalError";

class App {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.plugins();
    this.routes();
    this.Handler404();
    this.HandlerError();
  }

  protected plugins(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.assets();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Typescript Express App");
    });

    this.app.use("/auth", AuthRoutes);
    this.app.use("/todos", TodosRoutes);
  }

  protected Handler404(): void {
    this.app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new HttpException("Page not Found", 404));
    });
  }

  protected HandlerError(): void {
    this.app.use(GlobalError);
  }

  protected assets(): void {
    this.app.use(express.static(path.join(__dirname, "../public")));
  }

  public template(): void {
    this.app.set("view engine", "pug");
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App running on ${this.port} on Mode ${process.env.NODE_ENV}`);
    });
  }
}

export default App;
