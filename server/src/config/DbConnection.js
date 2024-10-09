const mongoose = require("mongoose");

function DbConnection() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connected!"));
}

module.exports = DbConnection;
