const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const overturesSchema = new Schema({
 senderId: {
   type: Schema.Types.ObjectId,
   required: true
 },
 targetId: {
   type: Schema.Types.ObjectId,
   required: true
 },
 woo: {
   type: String,
   required: true
 },
 date: {
   type: Date,
   default: Date.now
 }
});
const Overtures = mongoose.model("Overtures", overturesSchema);
module.exports = Overtures;