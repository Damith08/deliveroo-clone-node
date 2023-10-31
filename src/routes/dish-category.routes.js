const express = require("express");
const dishCategoryController = require("../controllers/dish-category.controller");
const dishCategoryRouter = express.Router();
const formatMiddleware = require("../middleware/format.validation.middleware");
const dishCategorySchema = require("../schema/dish.category.schema");
const authMiddleware = require("../middleware/auth.middleware");

// get all dishes-categories
dishCategoryRouter.get("/", dishCategoryController.getAllDishCategories);

// get a single dish category
dishCategoryRouter.get("/:id", dishCategoryController.getDishCategory);

// create a new dish
dishCategoryRouter.post(
  "/",
  formatMiddleware.schemaValidation(dishCategorySchema.dishCategorySchema),
  dishCategoryController.createDishCategory,
);

// // patch /dishes/:id - update a dish partially

// update a dish category completely
dishCategoryRouter.put(
  "/:id",
  formatMiddleware.schemaValidation(dishCategorySchema.dishCategorySchema),
  dishCategoryController.updateDishCategory,
);

// delete a dish category
dishCategoryRouter.delete(
  "/:id",
  authMiddleware.validateToken,
  dishCategoryController.deleteDishCategory,
);

module.exports = dishCategoryRouter;
