const express = require("express");
const dishRouter = express.Router();
const dishController = require("../controllers/dish.controller");
const dishSchema = require("../schema/dish.schema.validation");
const formatMiddleware = require("../middleware/format.validation.middleware");

// get all dishes
dishRouter.get("/", dishController.getAllDishes);

// get a single dish
dishRouter.get("/:id", dishController.getDish);

// create a new dish
dishRouter.post(
  "/",
  formatMiddleware.dishValidation(dishSchema.dishSchema),
  dishController.createDish,
);

// update a dish partially
dishRouter.patch("/:id", dishController.updateDishPartially);

// update a dish completely
dishRouter.put("/:id", dishController.updateDish);

// delete a dish
dishRouter.delete("/:id", dishController.deleteDish);

module.exports = dishRouter;
