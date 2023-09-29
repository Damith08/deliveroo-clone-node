const bcrypt = require("bcrypt");

exports.passwordHash = () => {
  return bcrypt.hash(req.body.password, 10);
};
