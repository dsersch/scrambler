const express = require('express');
const shotController = require('../controllers/ShotController');

const router = express.Router();

router
    .route('/')
    .get(shotController.getAllShots)
    .post(shotController.addShot);

router
    .route('/:id')
    .get(shotController.getShot)
    .patch(shotController.updateShot)
    .delete(shotController.deleteShot)

router
    .route('/hole/:id')
    .get(shotController.getShotsByHoleId)

module.exports = router;