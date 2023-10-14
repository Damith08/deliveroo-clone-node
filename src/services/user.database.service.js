const User = require("../models/user.model");

exports.findUserById = (id) => {
  return User.findById(id).exec();
};

exports.createNewUser = (data) => {
  const newUser = new User(data);
  return newUser.save();
};

exports.findAllUsers = () => {
  return User.find().exec();
};

exports.findUserByIdAndUpdate = (id, data) => {
  return User.findByIdAndUpdate(id, data, { returnDocument: "after" }).exec();
};

exports.findUserByIdAndDelete = (id) => {
  return User.findByIdAndDelete(id).exec();
};

exports.findUser = (email) => {
  const user = User.find({ email: email }).exec();
  console.log("DB" + user);
  return user;
};
