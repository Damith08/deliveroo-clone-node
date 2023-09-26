const mongoose = require("mongoose");
const { DB_COLLECTIONS } = require("../constants");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, require: true, unique: true },
  contact: { type: Number, required: true },
});

module.exports = mongoose.model(DB_COLLECTIONS.RESTAURANT, restaurantSchema);
