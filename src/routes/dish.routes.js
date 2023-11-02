const express = require("express");
const dishRouter = express.Router();
const dishController = require("../controllers/dish.controller");
const authMiddleware = require("../middleware/auth.middleware");
const formatMiddleware = require("../middleware/format.validation.middleware");
const dishSchema = require("../schema/dish.schema");
const dishUpdatePartially = require("../schema/dish.patch.schema");

// get all dishes
dishRouter.get("/", dishController.getAllDishes);

// get a single dish
dishRouter.get("/:id", dishController.getDish);

// create a new dish
dishRouter.post(
  "/",
  formatMiddleware.schemaValidation(dishSchema.dishSchema),
  dishController.createDish,
);

// update a dish partially
dishRouter.patch(
  "/:id",
  authMiddleware.validateToken,
  formatMiddleware.schemaValidation(dishUpdatePartially.dishPatchSchema),
  dishController.updateDishPartially,
);

// update a dish completely
dishRouter.put(
  "/:id",
  authMiddleware.validateToken,
  formatMiddleware.schemaValidation(dishSchema.dishSchema),
  dishController.updateDish,
);

// delete a dish
dishRouter.delete(
  "/:id",
  authMiddleware.validateToken,
  dishController.deleteDish,
);

module.exports = dishRouter;
