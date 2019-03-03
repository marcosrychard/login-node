const express = require("express");
const morgan = require("morgan");
const consign = require("consign");
const { tokenParser } = require("./app/security/token-parser.security")

class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    routes() {
        consign({
                cwd: "src/app"
            })
            .include("routes")
            .into(this.express);
    }

    middleware() {
        this.express.use(morgan("dev"));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(tokenParser)
    }
}

module.exports = new App().express;