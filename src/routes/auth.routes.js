const express = require("express");
const authRouter = express.Router();

// user login
authRouter.get("/", authRouter.loginUser);
