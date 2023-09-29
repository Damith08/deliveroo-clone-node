const User = require("../models/user.model");

exports.findUserByEmail = (email) => {
  return User.findOne(email).exec();
};
