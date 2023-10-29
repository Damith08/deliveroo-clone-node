const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();
const userSchema = require("../schema/user.schema");
const formatMiddleware = require("../middleware/format.validation.middleware");
// user login
authRouter.post("/login", authController.loginUser);

// user register
authRouter.post(
  "/signup",
  formatMiddleware.registerUserValidation(userSchema.registerSchema),
  authController.signupUser,
);

module.exports = authRouter;
