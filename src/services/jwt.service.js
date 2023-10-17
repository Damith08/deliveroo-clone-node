const jwt = require("jsonwebtoken");

console.log(process.env.TEST_KEY);

exports.getToken = (user) => {
  return jwt.sign({ email: user.email, sub: user._id }, process.env.TEST_KEY, {
    expiresIn: "1h",
  });
};
