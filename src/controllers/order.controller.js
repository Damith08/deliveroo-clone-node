const orderDatabaseService = require("../services/order.database.service");
const dishDatabaseService = require("../services/dish.database.service");
const restaurantDatabaseService = require("../services/restaurant.database.service");
const userDatabaseService = require("../services/user.database.service");

// get all orders
exports.getAllOrders = (req, res) => {
  orderDatabaseService
    .findAllOrders()
    .then((allOrders) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: allOrders,
      });
    })
    .catch((err) => {
      console.log(err, "getAllOrders");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// get a single order
exports.getOrder = (req, res) => {
  const id = req.params.id;
  orderDatabaseService
    .findOrderById(id)
    .then((order) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: order,
      });
    })
    .catch((err) => {
      console.log(err, "find order");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// create a new order
exports.createOrder = (req, res) => {
  dishDatabaseService
    .findDishById(req.body.dish_id)
    .then((foundDish) => {
      if (!foundDish) {
        return res.status(404).json({
          message: "Dish not found",
          data: err,
        });
      } else {
        restaurantDatabaseService
          .findRestaurantById(req.body.restaurant_id)
          .then((foundRestaurant) => {
            if (!foundRestaurant) {
              return res.status(404).json({
                message: "Restaurant not found",
                data: err,
              });
            } else {
              userDatabaseService
                .findUserById(req.body.user_id)
                .then((foundUser) => {
                  if (!foundUser) {
                    return res.status(404).json({
                      message: "User not found",
                      data: err,
                    });
                  } else {
                    orderDatabaseService
                      .createNewOrder({
                        quantity: req.body.quantity,
                        totalPrice: req.body.total_price,
                        dishId: foundDish._id,
                        restaurantId: foundRestaurant._id,
                        userId: foundUser._id,
                      })
                      .then((saveOrder) => {
                        return res.status(201).json({
                          success: true,
                          message: "Success",
                          data: saveOrder,
                        });
                      })
                      .catch((err) => {
                        console.log(err, "createOrder");
                        // TODO: handle type error from mongoose and return 400
                        // TODO: handle required error from mongoose and return 400
                        // TODO: handle unique error from mongoose and return 409
                        return res.status(500).json({
                          success: false,
                          message: "Internal server error",
                          data: err,
                        });
                      });
                  }
                });
            }
          })
          .catch((err) => {
            return res.status(500).json({
              success: false,
              message: "Internal server error",
              data: err,
            });
          });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// update order partially
exports.updateOrderPartially = (req, res) => {
  const id = req.params.id;
  orderDatabaseService
    .findOrderByIdAndUpdate(id, {
      quantity: req.body.quantity,
      totalPrice: req.body.total_price,
    })
    .then((orderUpdate) => {
      return res.status(200).json({
        success: false,
        message: "Internal server error",
        data: orderUpdate,
      });
    })
    .catch((err) => {
      console.log(err, "updateOrder");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// update order
exports.updateOrder = (req, res) => {
  const id = req.params.id;
  orderDatabaseService
    .findOrderByIdAndUpdate(id, {
      quantity: req.body.quantity,
      totalPrice: req.body.total_price,
      dish: req.body.dish_id,
      restaurant: req.body.restaurant_id,
      user: req.body.user_id,
    })
    .then((orderUpdate) => {
      return res.status(200).json({
        success: false,
        message: "Internal server error",
        data: orderUpdate,
      });
    })
    .catch((err) => {
      console.log(err, "updateOrder");
      // TODO: handle type error from mongoose and return 400
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};

// delete order
exports.deleteOrder = (req, res) => {
  const id = req.params.id;
  orderDatabaseService
    .findOrderByIdAndDelete(id)
    .then((orderDelete) => {
      return res.status(200).json({
        success: true,
        message: "Success",
        data: orderDelete,
      });
    })
    .catch((err) => {
      console.log(err, "deleteOrder");
      // TODO: handle required error from mongoose and return 400
      // TODO: handle unique error from mongoose and return 409
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        data: err,
      });
    });
};
