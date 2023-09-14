const express = require("express");
const dishRouter = express.Router();

dishRouter.get("/dishes", (req, res) => {
  res.send("Dishes");
});

module.exports = dishRouter;
