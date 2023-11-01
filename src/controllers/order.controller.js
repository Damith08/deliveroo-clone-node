const orderDatabaseService = require("../services/order.database.service");
const dishDatabaseService = require("../services/dish.database.service");
const restaurantDatabaseService = require("../services/restaurant.database.service");
const userDatabaseService = require("../services/user.database.service");

// get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const allOrders = await orderDatabaseService.findAllOrders();

    return res.status(200).json({
      success: true,
      message: "Success",
      data: allOrders,
    });
  } catch (err) {
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};

// get a single order
exports.getOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await orderDatabaseService.findOrderById(id);

    return res.status(200).json({
      success: true,
      message: "Success",
      data: order,
    });
  } catch (err) {
    console.log(err, "find order");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};

// create a new order
exports.createOrder = async (req, res) => {
  try {
    const foundDish = await dishDatabaseService.findDishById(req.body.dish_id);

    if (!foundDish) {
      return res.status(404).json({
        success: false,
        message: "Dish not found",
        data: err,
      });
    }

    const foundRestaurant = await restaurantDatabaseService.findRestaurantById(
      req.body.restaurant_id,
    );

    if (!foundRestaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
        data: err,
      });
    }

    const foundUser = await userDatabaseService.findUserById(req.body.user_id);

    if (!foundUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: err,
      });
    }

    const createOrder = await orderDatabaseService.createNewOrder({
      quantity: req.body.quantity,
      totalPrice: req.body.total_price,
      dishId: req.body.dish_id,
      restaurantId: req.body.restaurant_id,
      userId: req.body.user_id,
    });

    return res.status(201).json({
      success: true,
      message: "Success",
      data: createOrder,
    });
  } catch (err) {
    console.log(err, "createOrder");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};

// update order partially
exports.updateOrderPartially = async (req, res) => {
  try {
    const id = req.params.id;
    const orderUpdate = await orderDatabaseService.findOrderByIdAndUpdate(id, {
      quantity: req.body.quantity,
      totalPrice: req.body.total_price,
    });

    return res.status(200).json({
      success: true,
      message: "Success",
      data: orderUpdate,
    });
  } catch (err) {
    console.log(err, "updateOrder");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};
// update order completely
exports.updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const orderUpdate = await orderDatabaseService.findOrderByIdAndUpdate(id, {
      quantity: req.body.quantity,
      totalPrice: req.body.total_price,
      dishId: req.body.dish_id,
      restaurantId: req.body.restaurant_id,
      userId: req.body.user_id,
    });

    return res.status(200).json({
      success: true,
      message: "Success",
      data: orderUpdate,
    });
  } catch (err) {
    console.log(err, "updateOrder");
    // TODO: handle type error from mongoose and return 400
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};

// delete order
exports.deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const orderDelete = await orderDatabaseService.findOrderByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Success",
      data: orderDelete,
    });
  } catch (err) {
    console.log(err, "deleteOrder");
    // TODO: handle required error from mongoose and return 400
    // TODO: handle unique error from mongoose and return 409
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: err,
    });
  }
};
