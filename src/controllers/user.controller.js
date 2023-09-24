const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create user
exports.createUser = (req, res) => {
  // hash password with Bcrypt
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const newUser = new User({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: hash,
      address: req.body.address,
      contact: req.body.contact,
    });

    newUser
      .save()
      .then((savedUser) => {
        return res.status(200).json({
          success: "Restaurant saved successfully!",
          data: savedUser,
        });
      })
      .catch((err) => {
        console.log(err, "createUser");
        // TODO: handle type error from mongoose and return 400
        // TODO: handle required error from mongoose and return 400
        // TODO: handle unique error from mongoose and return 409
        return res.status(400).json({
          error: err,
        });
      });
  });
};

// User login
exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
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

// get all restaurants data
exports.getAllUsers = (req, res) => {
  User.find()
    .exec()
    .then((allUsers) => {
      return res.status(200).json({
        success: "Get all Users Success!!",
        existingUsers: allUsers,
      });
    })
    .catch((err) => {
      console.log(err, "find allUsers");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// Update user
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
    .then((updateUser) => {
      return res.status(200).json({
        success: "Updated Successfully!!!",
        data: updateUser,
      });
    })
    .catch((err) => {
      console.log(err, "Cannot update");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// Delete user
exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .exec()
    .then((userDelete) => {
      return res.status(200).json({
        success: "User Deleted!!!",
        data: userDelete,
      });
    })
    .catch((err) => {
      console.log(err, "Cannot delete");
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};
