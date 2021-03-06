const mongoose = require('mongoose')

const roundSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        unique: true,
    },
    players: [Object],
    holes: [{
        type: mongoose.Schema.ObjectId,
        ref: "Hole"
    }],
    currentHole: {
        type: String,
        required: true,
    }
})

const Round = mongoose.model("Round", roundSchema);

module.exports = Round;