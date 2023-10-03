const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

// get all restaurants
router.get("/", restaurantController.getAllRestaurants);

// get a single restaurant
router.get("/:id", restaurantController.getRestaurant);

// create a new restaurant
router.post("/", restaurantController.createRestaurant);

// update a restaurant partially
router.patch("/:id", restaurantController.updateRestaurantPartially);

// update a restaurant completely
router.put("/:id", restaurantController.updateRestaurant);

// delete a restaurant
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
