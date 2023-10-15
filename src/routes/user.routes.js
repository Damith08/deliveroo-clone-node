const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

// get all users
userRouter.get("/", authMiddleware, userController.getAllUsers);

// get a single user
userRouter.get("/:id", userController.getUser);

// create a new user
userRouter.post("/", userController.createUser);

// update a user partially
userRouter.patch("/:id", userController.updateUserPartially);

// update a user completely
userRouter.put("/:id", userController.updateUser);

// delete a user
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
