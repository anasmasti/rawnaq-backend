import { connect } from "mongoose";

const mongoDbConnexion = runDbConnexion()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function runDbConnexion() {
  await connect("mongodb://localhost:27017/rawnaq");
}

export default mongoDbConnexion;
