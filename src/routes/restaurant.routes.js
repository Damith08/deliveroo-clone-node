const express = require("express");
const router = express.Router();
const formatMiddleware = require("../middleware/format.validation.middleware");
const restaurantController = require("../controllers/restaurant.controller");
const restaurantSchema = require("../schema/restaurant.schema");

// get all restaurants
router.get("/", restaurantController.getAllRestaurants);

// get a single restaurant
router.get("/:id", restaurantController.getRestaurant);

// create a new restaurant
router.post(
  "/",
  formatMiddleware.restaurantValidation(restaurantSchema.restaurantSchema),
  restaurantController.createRestaurant,
);

// update a restaurant partially
router.patch("/:id", restaurantController.updateRestaurantPartially);

// update a restaurant completely
router.put("/:id", restaurantController.updateRestaurant);

// delete a restaurant
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
