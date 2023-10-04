const userDatabaseService = require("../services/user.database.service");
const passwordService = require("../services/password.service");

// create user
exports.createUser = (req, res) => {
  passwordService.passwordHash(req.body.password).then((hash) => {
    userDatabaseService
      .createNewUser({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: hash,
        address: req.body.address,
        contact: req.body.contact,
      })
      .then((savedUser) => {
        return res.status(201).json({
          success: true,
          message: "Success",
          data: savedUser,
        });
      })
      .catch((err) => {
        console.log(err, "createUser");
        // TODO: handle type error from mongoose and return 400
        // TODO: handle required error from mongoose and return 400
        // TODO: handle unique error from mongoose and return 409
        return res.status(500).json({
          success: false,
          message: "Internal server error",
          data: err,
        });
      });
  });
};

// get all users data
// FIXME: remove password
exports.getAllUsers = (req, res) => {
  userDatabaseService
    .findAllUsers()
    .then((allUsers) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: allUsers,
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

// get single user data
// FIXME: remove password
exports.getUser = (req, res) => {
  const id = req.params.id;
  userDatabaseService
    .findUserById(id)
    .then((user) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: user,
      });
    })
    .catch((err) => {
      console.log(err, "find user");
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

// Update user
exports.updateUserPartially = (req, res) => {
  const id = req.params.id;
  userDatabaseService
    .findUserByIdAndUpdate(id, {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
    })
    .then((updateUser) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: updateUser,
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

// Update user
exports.updateUser = (req, res) => {
  const id = req.params.id;
  userDatabaseService
    .findUserByIdAndUpdate(id, {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      address: req.body.address,
      contact: req.body.contact,
    })
    .then((updateUser) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: updateUser,
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

// Delete user
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  userDatabaseService
    .findUserByIdAndDelete(id)
    .then((userDelete) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: userDelete,
      });
    })
    .catch((err) => {
      console.log(err, "Cannot delete");
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};
