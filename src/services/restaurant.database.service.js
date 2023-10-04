const Restaurant = require("../models/restaurant.model");

exports.findRestaurantById = (id) => {
  return Restaurant.findById(id).exec();
};

exports.findAllRestaurants = () => {
  return Restaurant.find().exec();
};

exports.createNewRestaurant = (data) => {
  const newRestaurant = new Restaurant(data);
  return newRestaurant.save();
};

exports.findRestaurantByIdAndUpdate = (id, data) => {
  return Restaurant.findByIdAndUpdate(id, data, {
    returnDocument: "after",
  }).exec();
};

exports.findRestaurantByIdAndDelete = (id) => {
  return Restaurant.findByIdAndDelete(id).exec();
};
