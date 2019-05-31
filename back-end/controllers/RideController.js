const rides = require('../rideOffers');

exports.getRides = (req, res, next) => {
    res.status(200).json({
        "success": true,
        "message": "Ride offers retrived successfully",
        "data": rides.rideOffers
    });
}

exports.singleRideOffer = (req, res, next) => {
    for (i = 0; i <= rides.rideOffers.length; i++) {
        if (req.params.id == i) {
            res.status(200).json({
                "success": true,
                "message": "Ride offer retrived successfully",
                "data": rides.rideOffers[req.params.id]
            })
        }
    }
}