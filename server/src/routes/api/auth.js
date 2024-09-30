const express = require('express')
const loginController = require('../../controllers/loginController.js')
const signinController = require('../../controllers/signinController.js')
const _ = express.Router()

_.post("/sign-in",signinController)
_.get("/login",loginController)
//http://localhost:8000/api/v1/auth/sign-in


module.exports=_