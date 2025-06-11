const mongoose = require("mongoose");

const uri =
  "mongodb+srv://siddharth1maurya112:siddharth@cluster0.rzgbgeu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function dbConnection() {
  mongoose
    .connect(uri)
    .then((response) => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
