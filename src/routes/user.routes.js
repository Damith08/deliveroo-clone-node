const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");

// get all users
userRouter.get("/", userController.getAllUsers);

// TODO: get a single user
// userRouter.get("/:id", userController.GETssingleuSER);

// create a new user
userRouter.post("/", userController.createUser);

// Authentication
userRouter.post("/login", userController.loginUser);

// TODO: update a user partially
// userRouter.patch("/:id", userController.loginUser);

// update a user completely
userRouter.put("/:id", userController.updateUser);

// delete a user
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
