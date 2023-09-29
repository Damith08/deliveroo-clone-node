const User = require("../models/user.model");

exports.findUserById = (id) => {
  return User.findById(id).exec();
};

exports.createNewUser = (id) => {
  const newUser = new User(id);
  return newUser.save();
};

exports.findAllUsers = () => {
  return User.find().exec();
};

exports.findUserByIdAndUpdate = (id) => {
  return User.findByIdAndUpdate(id).exec();
};

exports.findUserByIdAndDelete = (id) => {
  return User.findByIdAndDelete(id).exec();
};
