const http = require("http");
const express = require("express");
const mongoDbConnection = require("./db/config.db.ts");
const app = express();
const server = http.createServer(app);
const articleRoute = require("./router/article.routes.ts");
const homeRoute = require("./router/home.routes.ts");

mongoDbConnection;

//routes configuration
((...routes) => {
  routes.forEach((route) => {
    return app.use("/api/v1/", [route]);
  });
})(articleRoute, homeRoute);

server.listen(8888, () => {
  console.log(`Server runnig at : http://localhost:${8888}`);
});
