const mongoose = require("mongoose");

const shotSchema = new mongoose.Schema({
  shotType: {
      type: String,
      required: true,
  },
  club: {
      type: String,
      required: true,
  },
  player: {
      type: mongoose.Schema.ObjectId,
      ref: 'Player',
      required: true,
  },
  hole: {
      type: mongoose.Schema.ObjectId,
      ref: "Hole",
      required: true,
  }
});

const Shot = mongoose.model("Shot", shotSchema);

module.exports = Shot;
