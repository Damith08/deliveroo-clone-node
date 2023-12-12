const express = require("express");
const router = express.Router();
const formatMiddleware = require("../middleware/format.validation.middleware");
const restaurantController = require("../controllers/restaurant.controller");
const restaurantSchema = require("../schema/restaurant.schema");
const authMiddleware = require("../middleware/auth.middleware");
const restaurantUpdatePartiallySchema = require("../schema/restaurant.patch.schema");

// get all restaurants
router.get("/", restaurantController.getAllRestaurants);

// get a single restaurant
router.get("/:id", restaurantController.getRestaurant);

// create a new restaurant
router.post("/", restaurantController.createRestaurant);

// update a restaurant partially
router.patch(
  "/:id",
  formatMiddleware.schemaValidation(
    restaurantUpdatePartiallySchema.restaurantPatchSchema,
  ),
  restaurantController.updateRestaurantPartially,
);

// update a restaurant completely
router.put(
  "/:id",
  formatMiddleware.schemaValidation(restaurantSchema.restaurantSchema),
  restaurantController.updateRestaurant,
);

// delete a restaurant
router.delete(
  "/:id",
  authMiddleware.validateToken,
  restaurantController.deleteRestaurant,
);

module.exports = router;
