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

exports.findOrderByIdAndUpdate = (id, data) => {
  return Order.findByIdAndUpdate(id, data, { returnDocument: "after" }).exec();
};

exports.findOrderByIdAndDelete = (id) => {
  return Order.findByIdAndDelete(id).exec();
};
