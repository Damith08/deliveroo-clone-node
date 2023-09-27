const Order = require("../models/order.model");

// find an order
exports.findOrderById = (id) => {
  return Order.findById(id).exec();
};

// find all Orders
exports.findAllOrders = () => {
  return Order.find().exec();
};

// create an order
exports.createNewOrder = (order) => {
  const newOrder = new Order(order);
  return newOrder.save();
};

// update an order
exports.findOrderAndUpdate = (id) => {
  return Order.findByIdAndUpdate(id).exec();
};

// delete an order
exports.findOrderAndDelete = (id) => {
  return Order.findByIdAndDelete(id).exec();
};
