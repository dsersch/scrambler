const mongoose = require('mongoose')

const roundSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    players: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Player',
        required: true,
    }],
    holes: [{
        type: mongoose.Schema.ObjectId,
        ref: "Hole"
    }],
})

const Round = mongoose.model("Round", roundSchema);

module.exports = Round;