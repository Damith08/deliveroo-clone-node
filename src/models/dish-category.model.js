const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Use constants here
const { DB_COLLECTIONS } = require("../constants");

const dishCategory = new Schema(
  {
    name: { type: String, require: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(DB_COLLECTIONS.DISH_CATEGORY, dishCategory);
