const express = require("express");
const dishRouter = express.Router();
const dishController = require("../controllers/dish.controller");

// get all dishes
dishRouter.get("/", dishController.getAllDishes);

// get a single dish
dishRouter.get("/:id", dishController.getDish);

// create a new dish
dishRouter.post("/", dishController.createDish);

// update a dish partially
dishRouter.put("/:id", dishController.updateDishPartially);

// update a dish completely
dishRouter.put("/:id", dishController.updateDish);

// delete a dish
dishRouter.delete("/:id", dishController.deleteDish);
module.exports = dishRouter;
