import path from "path";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// router
import AuthRoutes from "./routes/authRouter";
import TodosRoutes from "./routes/todosRouter";

class App {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.plugins();
    this.routes();
    this.port = port;
  }

  protected plugins(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.assets();
    this.app.use(express.json());
    console.log(path.join(__dirname, "../public"));
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Typescript Express App");
    });

    this.app.use("/auth", AuthRoutes);
    this.app.use("/todos", TodosRoutes);
  }

  public assets(): void {
    this.app.use(express.static(path.join(__dirname, "../public")));
  }

  public template(): void {
    this.app.set("view engine", "pug");
  }

  public listen(): void {
    this.app.listen(this.port, () => console.log(`App running on ${this.port}`));
  }
}

const app = new App(8000);

app.listen();
