const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  _id: String,
  name: String,
  address: String,
  email: String,
  contact: Number,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
