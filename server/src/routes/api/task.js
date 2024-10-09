const express = require("express");
const createTaskControler = require("../../controllers/createTaskControler.js");
const {
  authenticateToken,
} = require("../../controllers/authTokenController.js");
const gateAllTaskController = require("../../controllers/gateAllTaskController.js");
const deleteTaskControler = require("../../controllers/deleteTaskControler.js");
const {
  updateTaskControler,
  updateImpTaskControler,
  updateComplateTaskControler,
  gatImportantTaskController,
  gatComplateTaskController,
  gatInComplateTaskController,
} = require("../../controllers/updateTaskControler.js");
const _ = express.Router();

_.post("/create-task", createTaskControler, authenticateToken);
_.get("/get-all-task", gateAllTaskController, authenticateToken);
_.delete("/delete-task/:id", deleteTaskControler, authenticateToken);
_.put("/update-task/:id", updateTaskControler, authenticateToken);
_.put("/update-imp-task/:id", updateImpTaskControler, authenticateToken);
_.put("/update-complate-task/:id", updateComplateTaskControler, authenticateToken);
_.get("/get-importent-task", gatImportantTaskController, authenticateToken);
_.get("/get-complate-task", gatComplateTaskController, authenticateToken);
_.get("/get-incomplate-task", gatInComplateTaskController, authenticateToken);

//http://localhost:8000/api/v1/task/create-task

module.exports = _;
