const express = require('express')
const holeController = require('../controllers/HoleController.js')

const router = express.Router()

router
    .route('/')
    .get(holeController.getAllHoles)
    .post(holeController.addHole)

router
    .route('/:id')
    .get(holeController.getHole)
    .patch(holeController.updateHole)
    .delete(holeController.deleteHole)

module.exports = router;