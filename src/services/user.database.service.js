const User = require("../models/user.model");

exports.findUserById = (id) => {
  return User.find()
    .exec()
    .then((foundUser) => {
      return res.status(200).json({
        success: "User found !!!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
};
// create new user
exports.createNewUser = (id) => {
  const newUser = new User(id);
  return newUser.save();
};

// get all users
exports.findAllUsers = () => {
  return User.find().exec();
};

// update user
exports.findAndUpdateUser = (id) => {
  return User.findByIdAndUpdate(id).exec();
};

// delete user
exports.findAndDeleteUser = (id) => {
  return User.findByIdAndDelete(id).exec();
};
