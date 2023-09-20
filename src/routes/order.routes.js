const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/order.controller");

// get /orders/ - get all orders
orderRouter.get("/", orderController.getAllOrders);

// get /orders/:id - get a single order
orderRouter.get("/:id", orderController.getOrder);

// post /orders - create a new order
orderRouter.post("/", orderController.createOrder);

// patch /orders/:id - update a order partially

// put /orders/:id - update a order completely
orderRouter.put("/:id", orderController.updateOrder);

// delete /orders/:id - delete a order
orderRouter.delete("/:id", orderController.deleteOrder);

module.exports = orderRouter;
