const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, require: true, unique: true },
  contact: { type: Number, required: true },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
