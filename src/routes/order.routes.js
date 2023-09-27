const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/order.controller");

// get all orders
orderRouter.get("/", orderController.getAllOrders);

// get a single order
orderRouter.get("/:id", orderController.getOrder);

// create a new order
orderRouter.post("/", orderController.createOrder);

// TODO: patch /orders/:id - update a order partially

// update a order completely
orderRouter.put("/:id", orderController.updateOrder);

// delete a order
orderRouter.delete("/:id", orderController.deleteOrder);

module.exports = orderRouter;
