const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    registered_date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = Item = mongoose.model("user", UserSchema);
