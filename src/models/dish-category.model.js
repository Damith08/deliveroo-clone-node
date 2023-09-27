const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Use constants here
const { DB_COLLECTIONS } = require("../constants");

const dishCategory = new Schema({
  name: { type: String, require: true },
  // image
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: DB_COLLECTIONS.RESTAURANT,
    required: true,
  },
  dish: {
    type: Schema.Types.ObjectId,
    ref: DB_COLLECTIONS.DISH,
    required: true,
  },
});

module.exports = mongoose.model(DB_COLLECTIONS.DISH_CATEGORY, dishCategory);
