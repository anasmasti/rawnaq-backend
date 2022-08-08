const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

app.route('/', (req, res) => {
    res.send('done')
})

server.listen(8888, () => {
  console.log("server runnig..");
});
