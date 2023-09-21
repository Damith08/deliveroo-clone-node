const Order = require("../models/order.model");
const dishDatabaseService = require("../services/dish.database.service");
const restaurantDatabaseService = require("../services/restaurant.database.service");
const userDatabaseService = require("../services/user.database.service");

// get all orders
exports.getAllOrders = (req, res) => {
  Order.find()
    .exec()
    .then((allOrders) => {
      return res.status(200).json({
        success: "Get all orders!!!",
        data: allOrders,
      });
    })
    .catch((err) => {
      console.log(err, "getAllOrders");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// get a single order
exports.getOrder = (req, res) => {
  Order.findById(req.params.findById)
    .exec()
    .then((order) => {
      return res.status(200).json({
        success: "Get a order!",
        existingDishes: order,
      });
    })
    .catch((err) => {
      console.log(err, "find order");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// create a new order
exports.createOrder = (req, res) => {
  dishDatabaseService
    .findDishById(req.body.dish_id)
    .then((foundDIsh) => {
      restaurantDatabaseService
        .findRestaurantById(req.body.restaurant_id)
        .then((foundREstaurant) => {
          userDatabaseService
            .findUserById(req.body.user_id)
            .then((foundUser) => {
              const newOrder = new Order({
                quantity: req.body.quantity,
                timestamps: new Date(),
                totalPrice: req.body.total_price,
                dish: foundDIsh._id,
                restaurant: foundREstaurant._id,
                user: foundUser._id,
              });

              newOrder
                .save()
                .then((saveOrder) => {
                  return res.status(200).json({
                    success: "Create new order!!!",
                    data: saveOrder,
                  });
                })
                .catch((err) => {
                  console.log(err, "createOrder");
                  // TODO: handle type error from mongoose and return 400
                  // TODO: handle required error from mongoose and return 400
                  // TODO: handle unique error from mongoose and return 409
                  return res.status(400).json({
                    error: err,
                  });
                });
            });
        });
    })
    .catch((err) => {
      return res.status(404).json({
        message: "~DIsh CAnnot be found",
      });
    });
};

// update order
exports.updateOrder = (req, res) => {
  order
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((orderUpdate) => {
      return res.status(200).json({
        success: "Order updated successfully!!!",
        data: orderUpdate,
      });
    })
    .catch((err) => {
      console.log(err, "updateOrder");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};

// delete order
exports.deleteOrder = (req, res) => {
  order
    .findByIdAndDelete(req.params.id)
    .exec()
    .then((orderDelete) => {
      return res.status(200).json({
        success: "Order deleted!!!",
        data: orderDelete,
      });
    })
    .catch((err) => {
      console.log(err, "deleteOrder");
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(400).json({
        error: err,
      });
    });
};
