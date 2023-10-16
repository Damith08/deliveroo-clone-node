const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

// get all users
userRouter.get("/", authMiddleware.validateToken, userController.getAllUsers);

// get a single user
userRouter.get("/:id", authMiddleware.validateToken, userController.getUser);

// create a new user
userRouter.post("/", userController.createUser);

// update a user partially
userRouter.patch(
  "/:id",
  authMiddleware.validateToken,
  userController.updateUserPartially,
);

// update a user completely
userRouter.put("/:id", authMiddleware.validateToken, userController.updateUser);

// delete a user
userRouter.delete(
  "/:id",
  authMiddleware.validateToken.userController.deleteUser,
);

module.exports = userRouter;
