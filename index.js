const http = require("http");
const express = require("express");
const mongoDbConnection = require("./db/config.db.ts");
const app = express();
const server = http.createServer(app);

mongoDbConnection

app.route('/', (req, res) => {
    res.send('done')
})

server.listen(8888, () => {
  console.log("server runnig..");
});
