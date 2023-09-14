const express = require("express");
const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
  res.send("User");
});

module.exports = userRouter;
