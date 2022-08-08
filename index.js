require('dotenv').config()
const http = require("http");
const express = require("express");
const mongoDbConnection = require("./db/config.db.ts");
const app = express();
const server = http.createServer(app);
const articleRoute = require("./router/article.routes.ts");
const homeRoute = require("./router/home.routes.ts");
const port = process.env.PORT 

// Connect to MongoDB
mongoDbConnection;

//routes configuration
((...routes) => {
  routes.forEach((route) => {
    return app.use("/api/v1/", [route]);
  });
})(articleRoute, homeRoute);

server.listen(port, () => {
  console.log(`Server runnig at : http://localhost:${port}`);
});
