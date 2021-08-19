const express = require('express')
const roundController = require('../controllers/RoundController.js')

const router = express.Router();

router
    .route('/')
    .get(roundController.getAllRounds)
    .post(roundController.addRound)

router
    .route('/:id')
    .get(roundController.getRound)
    .patch(roundController.updateRound)
    .delete(roundController.deleteRound)

module.exports = router;