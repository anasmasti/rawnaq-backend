require("dotenv").config();
const http = require("http");
const express = require("express");
const mongoDbConnection = require("./db/config.db.ts");
const app = express();
const server = http.createServer(app);
const articleRoute = require("./router/article.routes.ts");
const homeRoute = require("./router/home.routes.ts");
const handleRoutes = require("./utils/handleRoutes.ts");
const port = process.env.PORT;

// App setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoDbConnection;

//routes configuration
handleRoutes(app, articleRoute, homeRoute);

server.listen(port, () => {
  console.log(`Server runnig at : http://localhost:${port}`);
});
