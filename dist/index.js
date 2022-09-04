"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const config_db_1 = __importDefault(require("./src/config/db/config.db"));
const handleRoutes_1 = __importDefault(require("./src/api/v1/utils/handleRoutes"));
// Routes importation
const articleRoute = require("./src/api/v1/router/article.routes.js");
const authorRoute = require("./src/api/v1/router/author.routes.js");
const homeRoute = require("./src/api/v1/router/home.routes.js");
// Server config
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// env File config
(0, dotenv_1.config)();
// App global vars
const port = process.env.PORT;
// App body setup
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Connect to MongoDB
config_db_1.default;
//routes configuration
(0, handleRoutes_1.default)(app, articleRoute, authorRoute, homeRoute);
server.listen(port, () => {
    console.log(`Server runnig at : http://localhost:${port}`);
});
