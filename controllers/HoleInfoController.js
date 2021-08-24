const HoleInfo = require('../models/HoleInfo');
const mongoose = require('mongoose');

exports.getAllHoles = async (req, res) => {
    try {
        const allHoles = await HoleInfo.find();

        res.status(200).json({
            status: 'success',
            data: allHoles,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err,
        })
    }
}

exports.addHoleInfo = async (req, res) => {
    try {
        const newHoleInfo = await HoleInfo.create(req.body);

        res.status(200).json({
            status: 'success',
            data: newHoleInfo,
        })
    } catch (err) {
        res.status(404).json({
            status: 'success',
            message: err,
        })
    }
}

exports.getHoleInfo = async (req, res) => {
    try {
        const holeInfo = await HoleInfo.find({holeNumber: req.params.id})

        res.status(200).json({
            status: 'success',
            data: holeInfo,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.updateHoleInfo = async (req, res) => {
    try {
        const updatedHoleInfo = await HoleInfo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })

        res.status(201).json({
            status: 'success',
            data: updatedHoleInfo,
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.deleteHoleInfo = async (req, res) => {
    try {
        await HoleInfo.findByIdAndDelete(req.params.id)
        
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