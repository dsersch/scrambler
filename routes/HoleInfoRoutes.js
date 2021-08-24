const express = require('express')
const holeInfoController = require('../controllers/HoleInfoController.js')

const router = express.Router()

router
    .route('/')
    .get(holeInfoController.getAllHoles)
    .post(holeInfoController.addHoleInfo)

router
    .route('/:id')
    .get(holeInfoController.getHoleInfo)
    .patch(holeInfoController.updateHoleInfo)
    .delete(holeInfoController.deleteHoleInfo)

module.exports = router;