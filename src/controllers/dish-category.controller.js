const dishCategoryDatabaseService = require("../services/dish-categories.database.service");
const dishDatabaseService = require("../services/dish.database.service");
const restaurantDatabaseService = require("../services/restaurant.database.service");

// get all dish categories
exports.getAllDishCategories = (req, res) => {
  dishCategoryDatabaseService
    .findAllDishCategories()
    .then((allDishCategories) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: allDishCategories,
      });
    })
    .catch((err) => {
      console.log(err, "find allDishCategories");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// get a dish category
exports.getDishCategory = (req, res) => {
  const id = req.params.id;
  dishCategoryDatabaseService
    .getDishCategory(id)
    .then((dishCategory) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: dishCategory,
      });
    })
    .catch((err) => {
      console.log(err, "find allDishCategories");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// create dish category
exports.createDishCategory = (req, res) => {
  dishDatabaseService
    .findDishById(req.body.dish_id)
    .then((foundDish) => {
      restaurantDatabaseService
        .findRestaurantById(req.body.restaurant_id)
        .then((foundRestaurant) => {
          dishCategoryDatabaseService.createNewDishCategory({
            name: req.body.name,
            restaurant: foundRestaurant._id,
            dish: foundDish._id,
          });
        })
        .then((saveDishCategory) => {
          return res.status(200).json({
            success: true,
            message: "Success",
            data: saveDishCategory,
          });
        })
        .catch((err) => {
          console.log(err, "createDishCategory");
          // TODO: handle type error from mongoose and return 400
          // TODO: handle required error from mongoose and return 400
          // TODO: handle unique error from mongoose and return 409
          return res.status(400).json({
            success: false,
            message: "Internal server error",
            data: err,
          });
        })
        .catch((err) => {
          return res.status(400).json({
            success: false,
            message: "Internal server error",
            data: err,
          });
        });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// update dish category
exports.updateDishCategory = (req, res) => {
  const id = req.params.id;
  dishCategoryDatabaseService
    .findDishCategoryAndUpdate(id, {
      $set: req.body,
    })
    .then((dishCategoryUpdate) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: dishCategoryUpdate,
      });
    })
    .catch((err) => {
      console.log(err, "updateDish");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// delete dish category
exports.deleteDishCategory = (req, res) => {
  const id = req.params.id;
  dishCategoryDatabaseService
    .findDishCategoryAndDelete(id)
    .then((dishCategoryDelete) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: dishCategoryDelete,
      });
    })
    .catch((err) => {
      console.log(err, "deleteDish");
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};
