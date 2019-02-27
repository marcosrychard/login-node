const express = require("express");
const morgan = require("morgan");
const consign = require("consign");

class App {
    constructor() {
        this.express = expres();
        this.middleware();
        this.routes();
    }

    routes(app) {
        consign({
                cwd: "src"
            })
            .include("routes")
            .into(app);
    }

    middleware(app) {
        app.use(morgan("dev"));
        app.use(express.json());
        app.use(
            express.urlencoded({
                extended: true
            })
        );
    }
}

module.exports = new App().express;