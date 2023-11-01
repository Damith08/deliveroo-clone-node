const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  const token = req.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "UNAUTHORIZED",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "UNAUTHORIZED",
        data: err,
      });
    }
    req.userId = payload.sub;
    next();
  });
};
