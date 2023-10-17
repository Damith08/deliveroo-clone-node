const userDatabaseService = require("../services/user.database.service");
const passwordService = require("../services/password.service");
const jwtService = require("../services/jwt.service");

// User login
exports.loginUser = (req, res) => {
  const email = req.body.email;
  userDatabaseService
    .findUser({ email })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(401).json({
          success: false,
          message: "Auth failed",
        });
      }
      passwordService
        .passwordCompare(req.body.password, foundUser.password)
        .then((isValid) => {
          if (!isValid) {
            return res.status(401).json({
              success: false,
              message: "Invalid credentials",
            });
          }

          const token = jwtService.getToken(user);
          res.status(200).json({
            success: true,
            message: "Successfully logged in",
            data: {
              token,
            },
          });
        })
        .catch((err) => {
          return res.status(404).json({
            success: false,
            message: "Auth failed",
            data: err,
          });
        });
    })
    .catch((err) => {
      return res.status(404).json({
        success: false,
        message: "Auth failed",
        data: err,
      });
    });
};
