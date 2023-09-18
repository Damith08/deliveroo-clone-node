const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

// get /restaurants/ - get all restaurants
router.get("/", restaurantController.getAllRestaurants);
// get /restaurants/:id - get a single restaurant

// post /restaurants - create a new restaurant
router.post("/", restaurantController.createRestaurant);

// patch /restaurants/:id - update a restaurant partially
// put /restaurants/:id - update a restaurant completely
// delete /restaurants/:id - delete a restaurant

module.exports = router;
