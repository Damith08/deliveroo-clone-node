const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();

// user login
authRouter.post("/login", authController.loginUser);

// user register
authRouter.post("/signup", authController.signupUser);

module.exports = authRouter;
