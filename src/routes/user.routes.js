const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");

// get /users/ - get all users
userRouter.get("/", userController.getAllUsers);

// get /users/:id - get a single user
userRouter.get("/:id", (req, res) => {
  res.send("get a single user");
});

// post /users - create a new user
userRouter.post("/", userController.createUser);

// Authentication
userRouter.post("/login", userController.loginUser);

// patch /users/:id - update a user partially
userRouter.patch("/:id", (req, res) => {
  res.send("update a user partially");
});

// put /users/:id - update a user completely
userRouter.put("/:id", userController.updateUser);

// delete /users/:id - delete a user
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
