const jwt = require("jsonwebtoken");
const userDatabaseService = require("../services/user.database.service");
const passwordService = require("../services/password.service");
// const jwtService = require("../services/jwt.service");

// User login
exports.loginUser = (req, res) => {
  const email = req.body.email;
  userDatabaseService
    .findUser(email)
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }

      passwordService
        .passwordCompare(req.body.password, user.password)
        .then((isValid) => {
          if (!isValid) {
            return res.status(401).json({
              message: "Auth failed",
            });
          }

          // jwtService.jwtToken(token);
          const token = jwt.sign(
            { email: user.email, userId: user._id },
            "secret_long_password",
            { expiresIn: "1h" },
          );
          res.status(200).json({
            token: token,
            expiresIn: 3600,
            userId: user._id,
          });
        })
        .catch((err) => {
          return res.status(404).json({
            message: "Auth failed",
            data: err,
          });
        });
    })
    .catch((err) => {
      return res.status(404).json({
        message: "Auth failed",
        data: err,
      });
    });
};
