const jwt = require("jsonwebtoken");

exports.getToken = (user) => {
  return jwt.sign(
    { email: user.email, sub: user._id },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    },
  );
};
