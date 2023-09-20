const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
  quantity: { type: Number, required: true },
  placed_on: { type: Date, required: true },
  total_price: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
