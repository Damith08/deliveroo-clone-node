const Order = require("../models/order.model");

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
  const newOrder = new Order({
    quantity: req.body.quantity,
    placed_on: req.body.placed_on,
    total_price: req.body.total_price,
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
