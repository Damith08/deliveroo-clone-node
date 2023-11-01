const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Use constants here
const { DB_COLLECTIONS } = require("../constants");

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: { type: Number, required: true },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: DB_COLLECTIONS.RESTAURANT,
      required: true,
    },
    dishCategory: {
      type: Schema.Types.ObjectId,
      ref: DB_COLLECTIONS.DISH_CATEGORY,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(DB_COLLECTIONS.DISH, dishSchema);
