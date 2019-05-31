const express = require('express');
const router = express.Router();

const RideController = require('../../controllers/RideController');

router.get('/', RideController.getRides);

module.exports = router;