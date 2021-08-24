const mongoose = require('mongoose')

const holeInfoSchema = new mongoose.Schema({
    holeNumber: {
        type: String,
        required: true,
    },
    par: {
        type: Number,
        required: true,
    },
    handicap: {
        type: Number,
        required: true,
    },
    redTee: {
        type: Number,
        required: true,
    },
    whiteTee: {
        type: Number,
        required: true,
    },
    blueTee: {
        type: Number,
        required: true,
    },
})

const HoleInfo = mongoose.model('HoleInfo', holeInfoSchema);
module.exports = HoleInfo;