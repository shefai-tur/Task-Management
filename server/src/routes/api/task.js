const express = require('express')
const createTaskControler = require('../../controllers/createTaskControler')
const { authenticateToken } = require('../../controllers/authTokenController')

const _ = express.Router()


_.post("/create-task",authenticateToken,createTaskControler)

//http://localhost:8000/api/v1/task/create-task


module.exports=_