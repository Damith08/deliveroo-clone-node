const express = require("express");
const commonRouter = express.Router();

commonRouter.get("/", (req, res) => {
  res.send("Home page");
});

commonRouter.get("*", (req, res) => {
  res.send("Route not found");
});

module.exports = commonRouter;

// GROUTER.ANY(#*) ROUTE NOT FOUND
