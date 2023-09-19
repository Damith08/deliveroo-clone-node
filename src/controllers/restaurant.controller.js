const Restaurant = require("../models/restaurant.model");

// create restaurant
exports.createRestaurant = (req, res) => {
  const newRestaurant = new Restaurant({
    name: req.body.name,
    // example for kebab style
    // firstName: req.body.first_name,
    address: req.body.address,
    email: req.body.email,
    contact: req.body.contact,
  });

  newRestaurant
    .save()
    .then((savedRestaurant) => {
      return res.status(200).json({
        success: "Restaurant saved successfully!",
        data: savedRestaurant,
      });
    })
    .catch((err) => {
      console.log(err, "createRestaurant");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// get all restaurants data
exports.getAllRestaurants = (req, res) => {
  Restaurant.find()
    .exec()
    .then((allRestaurants) => {
      return res.status(200).json({
        success: "Get all restaurants Success!!",
        existingRestaurants: allRestaurants,
      });
    })
    .catch((err) => {
      console.log(err, "find allRestaurants");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// get restaurant data
exports.getRestaurant = (req, res) => {
  Restaurant.findById(id)
    .exec()
    .then((restaurant) => {
      return res.status(200).json({
        success: "Get restaurant Success!!",
        data: restaurant,
      });
    })
    .catch((err) => {
      console.log(err, "find restaurant");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// Update restaurant
exports.updateRestaurant = (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
    .then((updateRestaurant) => {
      return res.status(200).json({
        success: "Updated Successfully!!!",
        data: updateRestaurant,
      });
    })
    .catch((err) => {
      console.log(err, "Cannot update");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// Delete Restaurant
exports.deleteRestaurant = (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id)
    .exec()
    .then((deleteRestaurant) => {
      return res.status(200).json({
        success: "Restaurant Deleted!!!",
        data: deleteRestaurant,
      });
    })
    .catch((err) => {
      console.log(err, "Cannot delete");
      return res.status(400).json({
        error: err,
      });
    });
};
