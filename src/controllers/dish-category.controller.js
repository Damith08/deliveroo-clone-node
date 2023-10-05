const dishCategoryDatabaseService = require("../services/dish-categories.database.service");

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
      return res.status(500).json({
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
    .findDishCategory(id)
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
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// create dish category
exports.createDishCategory = (req, res) => {
  dishCategoryDatabaseService
    .createNewDishCategory({
      name: req.body.name,
    })
    .then((saveDishCategory) => {
      return res.status(201).json({
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
      return res.status(500).json({
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
    .findDishCategoryByIdAndUpdate(id, {
      name: req.body.name,
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
      return res.status(500).json({
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
    .findDishCategoryByIdAndDelete(id)
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
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};
