const mongoose = require("mongoose");
require("dotenv").config();
// Define the MongoDB connection URL, which should be stored in the process.env.localdb
const dbURL = process.env.localdb;

// Use the options for useNewUrlParser and useUnifiedTopology as needed
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Attempt to connect to the MongoDB database
mongoose
  .connect(dbURL, mongooseOptions)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch(err => {
    console.error("Error connecting to the database:", err.message);
  });

// Optionally, listen for Mongoose connection events
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to the database");
});

mongoose.connection.on("error", err => {
  console.error("Mongoose connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// Export the Mongoose instance if needed
module.exports = mongoose;
