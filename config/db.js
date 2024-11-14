const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGO_URI;
const dataBaseConnection = async () => {
  await mongoose
    .connect(URI)
    .then((success) => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log("Error connecting to the database", err);
    });
};
module.exports = dataBaseConnection;
