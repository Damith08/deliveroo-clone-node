const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

// user login
authRouter.get("/", authController.loginUser);
