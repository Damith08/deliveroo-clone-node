const dishDatabaseService = require("../services/dish.database.service");
const restaurantDatabaseService = require("../services/restaurant.database.service");
const dishCategoryDatabaseService = require("../services/dish-categories.database.service");

// get all dishes data
exports.getAllDishes = (req, res) => {
  dishDatabaseService
    .findAllDishes()
    .then((allDishes) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: allDishes,
      });
    })
    .catch((err) => {
      console.log(err, "find allUsers");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// get a dish data
exports.getDish = (req, res) => {
  const id = req.params.id;
  dishDatabaseService
    .findDishById(id)
    .then((dish) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: dish,
      });
    })
    .catch((err) => {
      console.log(err, "find dish");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// create a dish
exports.createDish = (req, res) => {
  dishCategoryDatabaseService
    .findDishCategory(req.body.dishCategory_id)
    .then((foundDishCategory) => {
      restaurantDatabaseService
        .findRestaurantById(req.body.restaurant_id)
        .then((foundRestaurant) => {
          dishDatabaseService
            .createNewDish({
              name: req.body.name,
              price: req.body.price,
              dishCategory: foundDishCategory._id,
              restaurant: foundRestaurant._id,
              timestamps: new Date(),
            })
            .then((saveDish) => {
              return res.status(201).json({
                success: true,
                message: "Success",
                data: saveDish,
              });
            })
            .catch((err) => {
              console.log(err, "createDish");
              // TODO: handle type error from mongoose and return 400
              // TODO: handle required error from mongoose and return 400
              // TODO: handle unique error from mongoose and return 409
              return res.status(500).json({
                success: false,
                message: "Internal server error",
                data: err,
              });
            });
        })
        .catch((err) => {
          return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: err,
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// update dish partially
exports.updateDishPartially = (req, res) => {
  const id = req.params.id;
  dishDatabaseService
    .findDishByIdAndUpdate(id, {
      name: req.body.name,
      price: req.body.price,
    })
    .then((dishUpdatedPartially) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: dishUpdatedPartially,
      });
    })
    .catch((err) => {
      console.log(err, "updateDish");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// update dish
exports.updateDish = (req, res) => {
  const id = req.params.id;
  dishDatabaseService
    .findDishByIdAndUpdate(id, {
      name: req.body.name,
      price: req.body.price,
      restaurant: foundRestaurant._id,
      dishCategory: foundDishCategory._id,
    })
    .then((dishUpdated) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: dishUpdated,
      });
    })
    .catch((err) => {
      console.log(err, "updateDish");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// delete dish
exports.deleteDish = (req, res) => {
  const id = req.params.id;
  dishDatabaseService
    .findDishByIdAndDelete(id)
    .then((dishDelete) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: dishDelete,
      });
    })
    .catch((err) => {
      console.log(err, "deleteDish");
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};
