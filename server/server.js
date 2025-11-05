const express = require("express");
const DbConnection = require("./src/config/DbConnection");
const app = express();
require("dotenv").config();
const routes = require("./src/routes");
const cors = require("cors");
const port = process.env.PORT || 4000;
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use(express.json());
app.use(cors());
DbConnection();
app.use(routes);
app.listen(port, () => {
  console.log("server runing on port " + port);
});
