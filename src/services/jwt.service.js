const jwt = require("jsonwebtoken");

exports.getToken = (user) => {
  return jwt.sign(
    { email: user.email, sub: user._id },
    "secret_long_password",
    { expiresIn: "1h" },
  );
};
