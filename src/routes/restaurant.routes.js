const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

// get all restaurants
router.get("/", restaurantController.getAllRestaurants);

// get a single restaurant
router.get("/:id", restaurantController.getRestaurant);

// create a new restaurant
router.post("/", restaurantController.createRestaurant);

// TODO: patch /restaurants/:id - update a restaurant partially

// update a restaurant completely
router.put("/:id", restaurantController.updateRestaurant);

// delete a restaurant
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
