const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();
const userRegisterSchema = require("../schema/user.schema");
const userLoginSchema = require("../schema/user.login.schema");
const formatMiddleware = require("../middleware/format.validation.middleware");
const emailCheckSchema = require("../schema/email.check.schema");
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

// email checking
authRouter.post(
  "/check-email",
  formatMiddleware.schemaValidation(emailCheckSchema.emailCheckSchema),
  authController.checkEmail,
);

module.exports = authRouter;
