const userDatabaseService = require("../services/user.database.service");
const passwordService = require("../services/password.service");
const jwtService = require("../services/jwt.service");

// User login
exports.loginUser = (req, res) => {
  const email = req.body.email;
  userDatabaseService
    .findUser(email)
    .then((user) => {
      if (!user[0]) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      passwordService
        .passwordCompare(req.body.password, user[0].password)
        .then((isValid) => {
          if (!isValid) {
            return res.status(401).json({
              message: "Auth failed",
            });
          }

          const token = jwtService.getToken(user);
          res.status(200).json({
            token: token,
            expiresIn: 3600,
            userId: user[0]._id,
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
