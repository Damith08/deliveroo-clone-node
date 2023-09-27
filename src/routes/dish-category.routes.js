const express = require("express");
const dishCategoryController = require("../controllers/dish-category.controller");
const dishCategoryRouter = express.Router();

// get all dishes-categories
dishCategoryRouter.get("/", dishCategoryController.getAllDishCategories);

// get a single dish category
dishCategoryRouter.get("/:id", dishCategoryController.getDishCategory);

// create a new dish
dishCategoryRouter.post("/:id", dishCategoryController.createDishCategory);

// // patch /dishes/:id - update a dish partially

// update a dish completely
dishCategoryRouter.put("/:id", dishCategoryController.updateDishCategory);

// // delete /dishes/:id - delete a dish
// dishCategoryRouter.delete("/:id", dishController.deleteDish);

module.exports = dishCategoryRouter;
