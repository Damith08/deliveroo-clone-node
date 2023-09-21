const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Use constants here
const { DB_COLLECTIONS } = require("../constants");

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, require: true, unique: true },
  contact: { type: Number, required: true },
});

module.exports = mongoose.model(DB_COLLECTIONS.RESTAURANT, restaurantSchema);
