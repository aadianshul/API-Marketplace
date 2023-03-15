const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connection Established"))
    .catch((err) => {
      console.log("Error connecting to Database: " + err);
    });
//require("./startup/db")(app); // db connection
require("./startup/routes")(app); // routes


// sample route
app.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

// server establishment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend server has started at " + PORT);
});
