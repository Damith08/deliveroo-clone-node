const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  console.log(req.token);
  const token = req.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Auth failed",
    });
  }

  jwt.verify(token, "secret_long_password", (err, payload) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Token not valid",
        data: err,
      });
    }
    req.userId = payload.sub;
    next();
  });
};
