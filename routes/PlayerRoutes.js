const express = require('express');
const playerController = require('../controllers/PlayerController.js');

const router = express.Router();

router
    .route('/')
    .get(playerController.getAllPlayers)
    .post(playerController.addPlayer)

router
    .route('/:id')
    .patch(playerController.updatePlayer)
    .delete(playerController.deletePlayer)

module.exports = router;