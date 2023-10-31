const userDatabaseService = require("../services/user.database.service");
const passwordService = require("../services/password.service");

// create user
exports.createUser = async (req, res) => {
  try {
    const isHash = await passwordService.passwordHash(req.body.password);
    const savedUser = await userDatabaseService.createNewUser({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: isHash,
      address: req.body.address,
      contact: req.body.contact,
    });
    return res.status(201).json({
      success: true,
      message: "Success",
      data: savedUser,
    });
  } catch (err) {
    console.log(err, "createUser");
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "User already exist",
      });
    }

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

// get all users data
// FIXME: remove password
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await userDatabaseService.findAllUsers();
    return res.status(200).json({
      success: true,
      message: "Success",
      data: allUsers,
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

// get single user data
// FIXME: remove password
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const singleUser = await userDatabaseService.findUserById(id);
    return res.status(200).json({
      success: true,
      message: "Success",
      data: singleUser,
    });
  } catch (err) {
    console.log(err, "find user");
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

// Update user partially
exports.updateUserPartially = async (req, res) => {
  try {
    const id = req.params.id;
    const foundUser = await userDatabaseService.findUserById(id);
    if (!foundUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const updateUser = await userDatabaseService.findUserByIdAndUpdate(id, {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      address: req.body.address,
      contact: req.body.contact,
    });
    return res.status(200).json({
      success: true,
      message: "Success",
      data: updateUser,
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

// Update user
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const isHash = await passwordService.passwordHash(req.body.password);
    const updateUser = await userDatabaseService.findUserByIdAndUpdate(id, {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: isHash,
      address: req.body.address,
      contact: req.body.contact,
    });
    return res.status(200).json({
      success: true,
      message: "Success",
      data: updateUser,
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

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userDelete = userDatabaseService.findUserByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "User Deleted",
      data: userDelete,
    });
  } catch (err) {
    console.log(err, "Cannot delete");
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};
