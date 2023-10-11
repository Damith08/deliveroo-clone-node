const bcrypt = require("bcrypt");

// password hashing
exports.passwordHash = (password) => {
  return bcrypt.hash(password, 10);
};

// password hashing compare
exports.passwordCompare = (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};
