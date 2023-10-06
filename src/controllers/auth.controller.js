const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userDatabaseService = require("../services/user.database.service");

// User login
exports.loginUser = (req, res) => {
  userDatabaseService
    .findUserById(email)
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        "secret_password",
        { expiresIn: "1h" },
      );
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Auth failed",
      });
    });
};
