const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Use constants here
const { DB_COLLECTIONS } = require("../constants");

const dishSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  // image: {[]},
});

module.exports = mongoose.model(DB_COLLECTIONS.DISH, dishSchema);
