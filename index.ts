import { config } from "dotenv";
import http from "http";
import express from "express";
import mongoDbConnection from "./src/config/db/config.db";
import handleRoutes from "./src/api/v1/utils/handleRoutes";

// Routes importation
const articleRoute = require("./src/api/v1/router/article.routes.ts");
const authorRoute = require("./src/api/v1/router/author.routes.ts");
const homeRoute = require("./src/api/v1/router/home.routes.ts");

// Server config
const app = express();
const server = http.createServer(app);

// env File config
config();

// App global vars
const port = process.env.PORT;

// App body setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoDbConnection;

//routes configuration
handleRoutes(app, articleRoute, authorRoute, homeRoute);

server.listen(port, () => {
  console.log(`Server runnig at : http://localhost:${port}`);
});
