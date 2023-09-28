const DishCategory = require("../models/dish-category.model");

exports.findAllDishCategories = () => {
  return DishCategory.find().exec();
};

exports.findDishCategory = (id) => {
  return DishCategory.findById(id).exec();
};

exports.createNewDishCategory = (dishCategory) => {
  const newDishCategory = new DishCategory(dishCategory);
  return newDishCategory.save();
};

exports.findDishCategoryByIdAndUpdate = (id) => {
  return DishCategory.findByIdAndUpdate(id).exec();
};

exports.findDishCategoryByIdAndDelete = (id) => {
  return DishCategory.findByIdAndDelete(id).exec();
};
