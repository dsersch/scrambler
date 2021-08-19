const Hole = require('../models/Hole');
const mongoose = require('mongoose');

exports.addHole = async (req, res) => {
    try {
        const newHole = await Hole.create(req.body);

        res.status(200).json({
            status: 'success',
            data: newHole,
        })
    } catch (err) {
        res.status(404).json({
            status: 'success',
            message: err,
        })
    }
}

exports.getHole = async (req, res) => {
    try {
        const hole = await Hole.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: hole,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.updateHole = async (req, res) => {
    try {
        const updatedHole = await Hole.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.status(201).json({
            status: 'success',
            data: updatedHole,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.deleteHole = async (req, res) => {
    try {
        await Hole.findByIdAndDelete(req.params.id)
        
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