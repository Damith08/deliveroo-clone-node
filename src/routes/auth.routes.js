const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();
const userRegisterSchema = require("../schema/user.schema");
const userLoginSchema = require("../schema/user.login.schema");
const formatMiddleware = require("../middleware/format.validation.middleware");
// user login
authRouter.post(
  "/login",
  formatMiddleware.schemaValidation(userLoginSchema.loginSchema),
  authController.loginUser,
);

// user register
authRouter.post(
  "/signup",
  formatMiddleware.schemaValidation(userRegisterSchema.registerSchema),
  authController.signupUser,
);

module.exports = authRouter;
