// Is it required to import restaurant model here?

exports.findRestaurantById = (id) => {
  return Restaurant.find()
    .exec()
    .then((foundRestaurant) => {
      return res.status(200).json({
        success: "Restaurant found!!!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
};
