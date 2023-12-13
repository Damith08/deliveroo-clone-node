const restaurantService = require("../services/restaurant.database.service");

// create restaurant
exports.createRestaurant = async (req, res) => {
  try {
    const savedRestaurant = await restaurantService.createNewRestaurant({
      name: req.body.name,
      image: req.body.image,
      tag: req.body.tag,
      closeAt: req.body.closeAt,
      minimum: req.body.minimum,
      deliveryCharge: req.body.deliveryCharge,
      address: req.body.address,
      email: req.body.email,
      contact: req.body.contact,
    });
    return res.status(201).json({
      success: true,
      message: "Success",
      data: savedRestaurant,
    });
  } catch (err) {
    console.log(err, "createRestaurant");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "RESTAURANT ALREADY EXISTS",
        data: err,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    }
  }
};

// get all restaurants data
exports.getAllRestaurants = async (req, res) => {
  try {
    const foundRestaurants = await restaurantService.findAllRestaurants();
    return res.status(200).json({
      success: true,
      message: "Success",
      data: foundRestaurants,
    });
  } catch (err) {
    console.log(err, "find allRestaurants");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};

// get single restaurant data
exports.getRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await restaurantService.findRestaurantById(id);
    return res.status(200).json({
      success: true,
      message: "Success",
      data: restaurant,
    });
  } catch (err) {
    console.log(err, "find restaurant");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};

// Update restaurant partially
exports.updateRestaurantPartially = async (req, res) => {
  try {
    const id = req.params.id;
    const updateRestaurantPartially =
      await restaurantService.findRestaurantByIdAndUpdate(id, {
        address: req.body.address,
        email: req.body.email,
        contact: req.body.contact,
      });
    return res.status(200).json({
      success: true,
      message: "Success",
      data: updateRestaurantPartially,
    });
  } catch (err) {
    console.log(err, "Cannot update");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};

// Update restaurant
exports.updateRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const updateRestaurant =
      await restaurantService.findRestaurantByIdAndUpdate(id, {
        name: req.body.name,
        image: req.body.image,
        tag: req.body.tag,
        closeAt: req.body.closeAt,
        minimum: req.body.minimum,
        deliveryCharge: req.body.deliveryCharge,
        address: req.body.address,
        email: req.body.email,
        contact: req.body.contact,
      });
    return res.status(200).json({
      success: true,
      message: "Success",
      data: updateRestaurant,
    });
  } catch (err) {
    console.log(err, "Cannot update");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};

// Delete Restaurant
exports.deleteRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteRestaurant =
      await restaurantService.findRestaurantByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Success",
      data: deleteRestaurant,
    });
  } catch (err) {
    console.log(err, "Cannot delete");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};
