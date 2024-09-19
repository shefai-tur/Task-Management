const express = require("express");
const _ = express.Router();

let apiRouts = require("./api");
let apiURL = process.env.BASE_URL;

_.use(apiURL, apiRouts);

_.use(apiURL, (req, res) => {
  res.json({ error: "No Api Found On This Route" });
});

module.exports = _;
