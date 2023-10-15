const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({
      message: "Auth failed",
      data: err,
    });

  jwt.verify(token, "secret_long_password", (err, user) => {
    if (err)
      return res.status(403).json({
        message: "Token not valid",
        data: err,
      });
    req.user = user;
    next();
  });
};
