const Shot = require('../models/Shot');
const mongoose = require('mongoose');

exports.getAllShots = async (req, res) => {
    try {
        const allShots = await Shot.find().populate('player')
        res.status(200).json({
            status: 'success',
            data: { allShots }
        })
    } catch (err) {
        res.status(404).json({
            status: 'success',
            message: err,
        })
    }
}

exports.addShot = async (req, res) => {
    try {
        const newShot = await Shot.create(req.body);

        res.status(201).json({
            status: 'success',
            data: newShot,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err,
        })
    }

}

exports.getShot = async (req, res) => {
    try {
        const shot = await Shot.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: shot
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.getShotsByHoleId = async (req, res) => {
    try {
        const foundShots = await Shot.find({hole: req.params.id})

        res.status(200).json({
            status: 'success',
            data: foundShots,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err,
        })
    }
}

exports.updateShot = async (req, res) => {
    try {
        const updatedShot = await Shot.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.status(201).json({
            status: 'success',
            data: updatedShot,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.deleteShot = async (req, res) => {
    try {
        await Shot.findByIdAndDelete(req.params.id)
        
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