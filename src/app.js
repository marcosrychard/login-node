const express = require("express");
const morgan = require("morgan");
const consign = require("consign");

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
        this.express.use(
            express.urlencoded({
                extended: true
            })
        );
    }
}

module.exports = new App().express;