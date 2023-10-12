const jwt = require("jsonwebtoken");

exports.jwtToken = (token) => {
  return jwt.sign(token).exec();
};
