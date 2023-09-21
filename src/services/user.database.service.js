// Is it required to import user model here?
exports.findUserById = (id) => {
  return User.find()
    .exec()
    .then((foundUser) => {
      return res.status(200).json({
        success: "User found !!!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
};
