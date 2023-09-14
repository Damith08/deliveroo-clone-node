const express = require("express");
const dishCategoryRouter = express.Router();

dishCategoryRouter.get("/dish-categories", (req, res) => {
  res.send("Dish-Categories");
});

module.exports = dishCategoryRouter;
