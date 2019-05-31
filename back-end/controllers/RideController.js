const rides = require('../rideOffers');

exports.getRides = (req, res, next) => {
    res.status(200).json({
        "success": true,
        "message": "Ride offers retrived successfully",
        "data": rides.rideOffers
    });
}