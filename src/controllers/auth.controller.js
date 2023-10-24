const userDatabaseService = require("../services/user.database.service");
const passwordService = require("../services/password.service");
const jwtService = require("../services/jwt.service");

// User login
exports.loginUser = (req, res) => {
  const email = req.body.email;
  userDatabaseService
    .findUser({ email })
    .then((userFound) => {
      console.log(userFound);
      if (!userFound) {
        console.log(userFound);
        return res.status(401).json({
          success: false,
          message: "Auth failed",
        });
      }
      passwordService
        .passwordCompare(req.body.password, userFound.password)
        .then((isValid) => {
          if (!isValid) {
            return res.status(401).json({
              success: false,
              message: "Invalid credentials",
            });
          }
          console.log(isValid);
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
            message: "Auth failed2",
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

// Register users
exports.signupUser = (req, res) => {
  passwordService
    .passwordHash(req.body.password)
    .then((hash) => {
      userDatabaseService
        .createNewUser({
          firstName: req.body.first_name,
          lastName: req.body.last_name,
          email: req.body.email,
          username: req.body.username,
          password: hash,
          address: req.body.address,
          contact: req.body.contact,
        })
        .then((UserCreated) => {
          return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: UserCreated,
          });
        })
        .catch((err) => {
          if (err.code === 11001) {
            return res.status(409).json({
              success: false,
              message: "USER ALREADY EXISTS",
              data: err,
            });
          } else {
            return res.status(500).json({
              success: false,
              message: "Internal server error",
              data: err,
            });
          }
        });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "INTERNAL SERVER",
        data: err,
      });
    });
};
