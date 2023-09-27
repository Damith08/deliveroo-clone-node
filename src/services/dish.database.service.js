const Dish = require("../models/dish.model");

// find all Dishes
exports.findAllDishes = () => {
  return Dish.find().exec();
};

// find a single dish
exports.findDishById = (id) => {
  return Dish.findById(id).exec();
};

// create a dish
exports.createNewDish = (dish) => {
  const newDish = new Dish(dish);
  return newDish.save();
};

// find and update a dish
exports.findDishAndUpdate = (id) => {
  return Dish.findByIdAndUpdate(id).exec();
};

// find and delete a dish
exports.findDishAndDelete = (id) => {
  return Dish.findByIdAndDelete(id).exec();
};
