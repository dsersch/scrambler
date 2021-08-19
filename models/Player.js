const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true,
    }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;