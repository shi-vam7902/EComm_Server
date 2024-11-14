//packages required
const express = require("express");
const app = express();
const dataBaseConnection = require("../config/db");
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
//routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
// usages
app.use(express.json());
app.use(cookieParser());
//adding cors
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
  })
);
//functionalities
app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server");
  } else {
    console.log("Server is running on port 3000");
  }
});
dataBaseConnection();
