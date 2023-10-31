const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const formatMiddleware = require("../middleware/format.validation.middleware");
const userSchema = require("../schema/user.schema");
const updateUserPartially = require("../schema/user.partially.update.schema");

// get all users
userRouter.get("/", authMiddleware.validateToken, userController.getAllUsers);

// get a single user
userRouter.get("/:id", authMiddleware.validateToken, userController.getUser);

// create a new user
userRouter.post(
  "/",
  formatMiddleware.schemaValidation(userSchema.registerSchema),
  userController.createUser,
);

// update a user partially
userRouter.patch(
  "/:id",
  formatMiddleware.schemaValidation(
    updateUserPartially.userPartiallyUpdateSchema,
  ),
  authMiddleware.validateToken,
  userController.updateUserPartially,
);

// update a user completely
userRouter.put(
  "/:id",
  formatMiddleware.schemaValidation(userSchema.registerSchema),
  authMiddleware.validateToken,
  userController.updateUser,
);

// delete a user
userRouter.delete(
  "/:id",
  authMiddleware.validateToken,
  userController.deleteUser,
);

module.exports = userRouter;
