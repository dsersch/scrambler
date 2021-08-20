const Round = require('../models/Round')
const mongoose = require('mongoose')

exports.getAllRounds = async (req, res) => {
    try {
        const allRounds = await Round.find().populate('players')
        res.status(200).json({
            status: 'success',
            data: { allRounds }
        })
    } catch (err) {
        res.status(404).json({
            status: 'success',
            message: err,
        })
    }
}

exports.addRound = async (req, res) => {
    try {
        const newRound = await (await Round.create(req.body));

        res.status(201).json({
            status: 'success',
            data: newRound,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err,
        })
    }

}

exports.getRound = async (req, res) => {
    try {
        const round = await Round.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: round,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.updateRound = async (req, res) => {
    try {
        const updatedRound = await Round.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.status(201).json({
            status: 'success',
            data: updatedRound,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.deleteRound = async (req, res) => {
    try {
        await Round.findByIdAndDelete(req.params.id)
        
        res.status(204).json({
            status: 'success',
            data: null
        })
    }
    catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}