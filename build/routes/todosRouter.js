"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class TodosRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.send("todos routes");
        });
    }
}
exports.default = new TodosRouter().router;
