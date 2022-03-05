const mongoose = require("mongoose");

const url = "mongodb+srv://blog:blog@blog.gqu8z.mongodb.net/MYBLOGWEBSITE?retryWrites=true&w=majority";

const db = () => {
  try {
    mongoose.connect(url, { useNewUrlParser: true, useunifiedTopology: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};
module.exports = db;
