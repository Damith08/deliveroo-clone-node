const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dishSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  // image: {[]},
});

module.exports = mongoose.model("Dish", dishSchema);
