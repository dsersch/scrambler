const mongoose = require('mongoose');

const holeSchema = new mongoose.Schema({
    round: {
        type: mongoose.Schema.ObjectId,
        ref: 'Round',
        required: true,
    },
    par: {
        type: Number,
        required: true,
    },
    shots: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Shot',
    }
    ],
    targetHit: {
        type: Boolean,
        required: true,
    }
})

const Hole = mongoose.model("Hole", holeSchema);

module.exports = Hole;