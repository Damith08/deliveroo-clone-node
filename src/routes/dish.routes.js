const express = require("express");
const dishRouter = express.Router();
const dishController = require("../controllers/dish.controller");

// get all dishes
dishRouter.get("/", dishController.getAllDishes);

// get a single dish
dishRouter.get("/:id", dishController.getDish);

// create a new dish
dishRouter.post("/:id", dishController.createDish);

// TODO: patch /dishes/:id - update a dish partially

// update a dish completely
dishRouter.put("/:id", dishController.updateDish);

// delete a dish
dishRouter.delete("/:id", dishController.deleteDish);
module.exports = dishRouter;
