const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

// get /restaurants/ - get all restaurants
// this is working
router.get("/", restaurantController.getAllRestaurants);

// get /restaurants/:id - get a single restaurant
// not working
router.get("/:id", restaurantController.getRestaurant);

// post /restaurants - create a new restaurant
router.post("/", restaurantController.createRestaurant);

// patch /restaurants/:id - update a restaurant partially
// router.patch("/:id", restaurantController.updateRestaurant);

// put /restaurants/:id - update a restaurant completely
router.put("/:id", restaurantController.updateRestaurant);

// delete /restaurants/:id - delete a restaurant
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
