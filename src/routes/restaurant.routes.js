const express = require("express");
const restaurantRouter = express.Router();

restaurantRouter.get("/restaurants", (req, res) => {
  res.send("Restaurants");
});

module.exports = restaurantRouter;
