"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
// router
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const todosRouter_1 = __importDefault(require("./routes/todosRouter"));
class App {
    constructor(port) {
        this.app = express_1.default();
        this.plugins();
        this.routes();
        this.port = port;
    }
    plugins() {
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(morgan_1.default("dev"));
        this.assets();
        this.app.use(express_1.default.json());
        console.log(path_1.default.join(__dirname, "../public"));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Typescript Express App");
        });
        this.app.use("/auth", authRouter_1.default);
        this.app.use("/todos", todosRouter_1.default);
    }
    assets() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
    }
    template() {
        this.app.set("view engine", "pug");
    }
    listen() {
        this.app.listen(this.port, () => console.log(`App running on ${this.port}`));
    }
}
const app = new App(8000);
app.listen();
