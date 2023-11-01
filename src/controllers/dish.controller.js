const dishDatabaseService = require("../services/dish.database.service");
const restaurantDatabaseService = require("../services/restaurant.database.service");
const dishCategoryDatabaseService = require("../services/dish-categories.database.service");

// get all dishes data
exports.getAllDishes = async (req, res) => {
  try {
    const allDishes = await dishDatabaseService.findAllDishes();
    return res.status(200).json({
      success: true,
      message: "Success",
      data: allDishes,
    });
  } catch (err) {
    console.log(err, "find allUsers");
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
// get a dish data
exports.getDish = async (req, res) => {
  try {
    const id = req.params.id;
    const dish = await dishDatabaseService.findDishById(id);
    return res.status(200).json({
      success: true,
      message: "Success",
      data: dish,
    });
  } catch (err) {
    console.log(err, "find dish");
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
// create a dish
exports.createDish = async (req, res) => {
  try {
    const foundDishCategory =
      await dishCategoryDatabaseService.findDishCategory(
        req.body.dishCategory_id,
      );
    if (!foundDishCategory) {
      return res.status(404).json({
        success: false,
        message: "Dish category cannot found",
        data: err,
      });
    }

    const foundRestaurant = await restaurantDatabaseService.findRestaurantById(
      req.body.restaurant_id,
    );
    if (!foundRestaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant cannot found",
      });
    }

    const saveDish = await dishDatabaseService.createNewDish({
      name: req.body.name,
      price: req.body.price,
      dishCategory: req.body.dishCategory_id,
      restaurant: req.body.restaurant_id,
    });
    return res.status(201).json({
      success: true,
      message: "Success",
      data: saveDish,
    });
  } catch (err) {
    console.log(err, "createDish");
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

// update dish partially
exports.updateDishPartially = async (req, res) => {
  try {
    const id = req.params.id;
    const dishUpdatedPartially =
      await dishDatabaseService.findDishByIdAndUpdate(id, {
        name: req.body.name,
        price: req.body.price,
      });
    return res.status(200).json({
      success: true,
      message: "Success",
      data: dishUpdatedPartially,
    });
  } catch (err) {
    console.log(err, "updateDish");
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

// update dish
exports.updateDish = async (req, res) => {
  try {
    const id = req.params.id;
    const dishUpdated = await dishDatabaseService.findDishByIdAndUpdate(id, {
      name: req.body.name,
      price: req.body.price,
      dishCategory: req.body.dishCategory_id,
      restaurant: req.body.restaurant_id,
    });
    return res.status(200).json({
      success: true,
      message: "Success",
      data: dishUpdated,
    });
  } catch (err) {
    console.log(err, "updateDish");
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

// delete dish
exports.deleteDish = async (req, res) => {
  try {
    const id = req.params.id;
    const dishDelete = await dishDatabaseService.findDishByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Success",
      data: dishDelete,
    });
  } catch (err) {
    console.log(err, "deleteDish");
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};
