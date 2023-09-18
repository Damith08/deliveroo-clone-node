const express = require("express");
const userRouter = express.Router();

// get /users/ - get all users
userRouter.get("/", (req, res) => {
  res.send("get all users");
});

// get /users/:id - get a single user
userRouter.get("/:id", (req, res) => {
  res.send("get a single user");
});

// post /users - create a new user
userRouter.post("/", (req, res) => {
  res.send("create a new user");
});

// patch /users/:id - update a user partially
userRouter.patch("/:id", (req, res) => {
  res.send("update a user partially");
});

// put /users/:id - update a user completely
userRouter.patch("/:id", (req, res) => {
  res.send("update a user completely");
});

// delete /users/:id - delete a user
userRouter.delete("/:id", (req, res) => {
  res.send("delete a user");
});

module.exports = userRouter;
