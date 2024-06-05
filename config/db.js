const mongoose = require("mongoose");
const colors = require("colors");

//function mongodb database connection
const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(
    `Connected to Database ${mongoose.connection.host}`.bgWhite,
    colors.bgBlue
  );
  try {
  } catch (error) {
    console.log("Database Error", error, colors.bgRed);
  }
};

module.exports = connectDb;
