const mongoose = require("mongoose");

// Use constants here
const { DB_COLLECTIONS } = require("../constants");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    minLength: [10, "Must be at least 10 digits"],
    maxLength: [12, "Must enter equal or less than 12 digits"],
    required: true,
  },
});

module.exports = mongoose.model(DB_COLLECTIONS.USER, userSchema);
