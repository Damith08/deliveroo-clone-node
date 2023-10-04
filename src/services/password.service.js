const bcrypt = require("bcrypt");

exports.passwordHash = (password) => {
  return bcrypt.hash(password, 10);
};
