const DishCategory = require("../models/dish-category.model");

// find all Dishes-Categories
exports.findAllDishCategories = () => {
  return DishCategory.find().exec();
};

// find a dish category
exports.findDishCategory = (id) => {
  return DishCategory.findById(id).exec();
};

// create new dish category
exports.createNewDishCategory = (dishCategory) => {
  const newDishCategory = new DishCategory(dishCategory);
  return newDishCategory.save();
};

// find and update a dish category
exports.findDishCategoryAndUpdate = (id) => {
  return DishCategory.findByIdAndUpdate(id).exec();
};

// find and delete dish category
exports.findDishCategoryAndDelete = (id) => {
  return DishCategory.findByIdAndDelete(id).exec();
};
