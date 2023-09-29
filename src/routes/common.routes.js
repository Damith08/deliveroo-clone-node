const express = require("express");
const commonRouter = express.Router();

commonRouter.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API IS RUNNING ",
  });
});

commonRouter.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = commonRouter;
