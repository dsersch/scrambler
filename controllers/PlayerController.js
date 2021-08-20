const Player = require('../models/Player.js');
const mongoose = require('mongoose');

exports.getAllPlayers = async (req, res) => {
    try {
        const allPlayers = await Player.find()
        res.status(200).json({
            status: 'success',
            data: { allPlayers }
        })
    } catch (err) {
        res.status(404).json({
            status: 'success',
            message: err,
        })
    }
}

exports.addPlayer = async (req, res) => {
    try {
        const newPlayer = await Player.create(req.body)

        res.status(201).json({
            status: 'success',
            data: newPlayer,
        })
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err,
        })
    }
};

exports.updatePlayer = async (req, res) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.status(201).json({
            status: 'success',
            data: updatedPlayer,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err,
        })
    }
};

exports.deletePlayer = async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        
        res.status(204).json({
            status: 'success',
            data: null,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err,
        })
    }
};