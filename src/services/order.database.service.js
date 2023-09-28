const Order = require("../models/order.model");

exports.findOrderById = (id) => {
  return Order.findById(id).exec();
};

exports.findAllOrders = () => {
  return Order.find().exec();
};

exports.createNewOrder = (order) => {
  const newOrder = new Order(order);
  return newOrder.save();
};

exports.findOrderByIdAndUpdate = (id) => {
  return Order.findByIdAndUpdate(id).exec();
};

exports.findOrderByIdAndDelete = (id) => {
  return Order.findByIdAndDelete(id).exec();
};
