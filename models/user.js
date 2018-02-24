const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("Articles", userSchema);

module.exports = User;