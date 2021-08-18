const mongoose = require("mongoose");

const shotSchema = new mongoose.Schema({
  holeNumber: Number,
  shotType: String,
  club: String,
  targetHit: Boolean,
  player: String,
});

const Shot = mongoose.model("Shot", shotSchema);

module.exports = Shot;
