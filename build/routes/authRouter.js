"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AuthRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", (req, res) => {
            res.send("Hello auth router");
        });
        this.router.post("/register", (req, res) => {
            res.send("Register router");
        });
        this.router.post("/login", (req, res) => {
            res.send("login router");
        });
    }
}
exports.default = new AuthRouter().router;
