//import express
const express = require("express");
//import colors
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

//configuration of dotenv
dotenv.config();

//establishing the database connection
//DB connection
connectDb();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
//URL => https://localhost:8080

app.use("/api/v1/test", require("./routes/testRoutes")); //application version1

//Get request and response from the user
//main route

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Resturant App API based project</h1>");
});

//PORT
const PORT = process.env.PORT || 5000;
//listening to the port
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.white.bgMagenta);
});
