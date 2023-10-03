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

exports.findRestaurantByIdAndUpdatePartially = (id) => {
  return Restaurant.findByIdAndUpdate(id).exec();
};

exports.findRestaurantByIdAndUpdate = (id) => {
  return Restaurant.findByIdAndUpdate(id).exec();
};

exports.findRestaurantByIdAndDelete = (id) => {
  return Restaurant.findByIdAndDelete(id).exec();
};
