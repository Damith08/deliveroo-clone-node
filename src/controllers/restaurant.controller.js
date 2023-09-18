const Restaurant = require("../models/restaurant.model");

exports.createRestaurant = (req, res) => {
  const newRestaurant = new Restaurant({
    name: req.body.name,
    firstName: req.body.first_name,
  });

  newRestaurant
    .save()
    .then((savedRestaurant) => {
      return res.status(200).json({
        success: "Restaurant saved successfully!",
        data: savedRestaurant,
      });
    })
    .catch((err) => {
      console.log(err, "createRestaurant");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// exports.getAllRestaurants = (req, res) => {
//   Restaurant.find().exec().then((allRestaurants) => {
//     return res.status(200).json({
//         success: "Restaurant"
//     })
//   });
// };
