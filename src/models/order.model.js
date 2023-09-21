const mongoose = require("mongoose");

// Use constants here
const { DB_COLLECTIONS } = require("../constants");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    quantity: { type: Number, required: true },
    placed_on: { type: Date, required: true },
    total_price: { type: Number, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: DB_COLLECTIONS.USER,
      required: true,
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: DB_COLLECTIONS.RESTAURANT,
      required: true,
    },
    dish: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model(DB_COLLECTIONS.ORDER, orderSchema);
