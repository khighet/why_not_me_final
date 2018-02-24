const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  about: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  state: {
    type: String,
  },
  sex: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  seeking: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  pic1: {
    type: String,
    required: true
  },
  pic2: {
    type: String
  },
  pic3: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Profiles = mongoose.model("Profiles", profileSchema);

module.exports = Profiles;