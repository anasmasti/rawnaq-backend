const mongoose = require("mongoose");

const mongoDbConnection = main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/rawnaq");
}

module.exports = mongoDbConnection;
