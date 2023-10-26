const dishCategoryDatabaseService = require("../services/dish-categories.database.service");

// get all dish categories
exports.getAllDishCategories = async (req, res) => {
  try {
    const allDishCategories =
      await dishCategoryDatabaseService.findAllDishCategories();

    return res.status(200).json({
      success: true,
      message: "Success",
      data: allDishCategories,
    });
  } catch (err) {
    console.log(err, "find allDishCategories");
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

// get a dish category
exports.getDishCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const dishCategory = await dishCategoryDatabaseService.findDishCategory(id);
    return res.status(200).json({
      success: true,
      message: "Success",
      data: dishCategory,
    });
  } catch (err) {
    console.log(err, "find allDishCategories");
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

// create dish category
exports.createDishCategory = async (req, res) => {
  try {
    const saveDishCategory =
      await dishCategoryDatabaseService.createNewDishCategory({
        name: req.body.name,
      });
    return res.status(201).json({
      success: true,
      message: "Success",
      data: saveDishCategory,
    });
  } catch (err) {
    console.log(err, "createDishCategory");
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

// update dish category
exports.updateDishCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const dishCategoryUpdate =
      await dishCategoryDatabaseService.findDishCategoryByIdAndUpdate(id, {
        name: req.body.name,
      });
    return res.status(200).json({
      success: true,
      message: "Success",
      data: dishCategoryUpdate,
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

// delete dish category
exports.deleteDishCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const dishCategoryDelete =
      await dishCategoryDatabaseService.findDishCategoryByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Success",
      data: dishCategoryDelete,
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
