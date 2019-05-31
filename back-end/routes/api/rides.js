const express = require('express');
const router = express.Router();

const RideController = require('../../controllers/RideController');

router.get('/', RideController.getRides);
router.get('/:id', RideController.singleRideOffer);
router.post('/', RideController.newRide);

module.exports = router;