const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Use constants here
const { DB_COLLECTIONS } = require("../constants");

const dishSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: DB_COLLECTIONS.RESTAURANT,
    required: true,
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: DB_COLLECTIONS.ORDER,
    required: true,
  },
  // image: {[]},
});

module.exports = mongoose.model(DB_COLLECTIONS.DISH, dishSchema);
