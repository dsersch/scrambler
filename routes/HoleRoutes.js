const express = require('express')
const holeController = require('../controllers/HoleController.js')

const router = express.Router()

router
    .route('/')
    .post(holeController.addHole)

router
    .route('/:id')
    .get(holeController.getHole)
    .patch(holeController.updateHole)
    .delete(holeController.deleteHole)

module.exports = router;