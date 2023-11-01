const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/order.controller");
const authMiddleware = require("../middleware/auth.middleware");
const formatMiddleware = require("../middleware/format.validation.middleware");
const orderSchema = require("../schema/order.schema");
const orderUpdatePartially = require("../schema/order.patch.schema");

// get all orders
orderRouter.get("/", orderController.getAllOrders);

// get a single order
orderRouter.get("/:id", orderController.getOrder);

// create a new order
orderRouter.post(
  "/",
  authMiddleware.validateToken,
  formatMiddleware.schemaValidation(orderSchema.orderSchema),
  orderController.createOrder,
);

//update an order partially
orderRouter.patch(
  "/:id",
  formatMiddleware.schemaValidation(orderUpdatePartially.orderPatchSchema),
  authMiddleware.validateToken,
  orderController.updateOrderPartially,
);

// update an order completely
orderRouter.put(
  "/:id",
  formatMiddleware.schemaValidation(orderSchema.orderSchema),
  authMiddleware.validateToken,
  orderController.updateOrder,
);

// delete a order
orderRouter.delete(
  "/:id",
  authMiddleware.validateToken,
  orderController.deleteOrder,
);

module.exports = orderRouter;
