const express = require("express");
const Restaurants = require("../models/restaurant.model");
const router = express.Router();

router.post("/restaurants/save", (req, res) => {
  let newRestaurant = new Restaurants(req.body);

  newRestaurant.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Restaurant saved successfully!",
    });
  });
});

router.get("/restaurants", (req, res) => {
  Restaurants.find().exec((err, Restaurants) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingRestaurants: Restaurants,
    });
  });
});

module.exports = router;
