const express = require("express");
const dishRouter = express.Router();
const dishController = require("../controllers/dish.controller");

// get /dishes/ - get all dishes
dishRouter.get("/", dishController.getAllDishes);

// get /dishes/:id - get a single dish
dishRouter.get("/:id", dishController.getDish);

// post /dishes - create a new dish
dishRouter.post("/:id", dishController.createDish);

// patch /dishes/:id - update a dish partially
// put /dishes/:id - update a dish completely
dishRouter.put("/:id", dishController.updateDish);

// delete /dishes/:id - delete a dish
dishRouter.delete("/:id", dishController.deleteDish);
module.exports = dishRouter;
