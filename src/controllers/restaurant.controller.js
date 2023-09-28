const restaurantService = require("../services/restaurant.database.service");
const dishDatabaseService = require("../services/dish.database.service");
// create restaurant
exports.createRestaurant = (req, res) => {
  dishDatabaseService
    .findDishById(req.body.dish_id)
    .then((foundDish) => {
      restaurantService
        .createNewRestaurant({
          name: req.body.name,
          dish: foundDish._id,
          address: req.body.address,
          email: req.body.email,
          contact: req.body.contact,
        })
        .then((savedRestaurant) => {
          return res.status(201).json({
            success: true,
            message: "Success",
            data: savedRestaurant,
          });
        })
        .catch((err) => {
          console.log(err, "createRestaurant");
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
      console.log(err, "foundDish");
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

// get all restaurants data
exports.getAllRestaurants = (req, res) => {
  restaurantService
    .findAllRestaurants()
    .then((data) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err, "find allRestaurants");
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

// get restaurant data
exports.getRestaurant = (req, res) => {
  const id = req.params.id;
  restaurantService
    .findRestaurantById(id)
    .then((restaurant) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: restaurant,
      });
    })
    .catch((err) => {
      console.log(err, "find restaurant");
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

// Update restaurant
exports.updateRestaurant = (req, res) => {
  const id = req.params.id;
  restaurantService
    .findRestaurantByIdAndUpdate(id, {
      name: req.body.name,
      dish: foundDish._id,
      address: req.body.address,
      email: req.body.email,
      contact: req.body.contact,
    })
    .then((updateRestaurant) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: updateRestaurant,
      });
    })
    .catch((err) => {
      console.log(err, "Cannot update");
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

// Delete Restaurant
exports.deleteRestaurant = (req, res) => {
  const id = req.params.id;
  restaurantService
    .findRestaurantByIdAndDelete(id)
    .then((deleteRestaurant) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: deleteRestaurant,
      });
    })
    .catch((err) => {
      console.log(err, "Cannot delete");
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};
