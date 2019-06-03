const Ride = require('../models/Ride');

exports.getRides = (req, res, next) => {
    Ride.findAll()
        .then(docs => {
            const reponse = {
                code: 200,
                message: 'Successfully',
                count: docs.length,
                data: docs.map(doc => {
                    return {
                        id: doc.id,
                        passengerId: doc.userId,
                        pickupArea: doc.pickupArea,
                        Destination: doc.destination,
                        status: doc.status,
                        createdAt: doc.createdAt,
                        updatedAt: doc.updatedAt,
                        request: {
                            type: 'GET',
                        }
                    }
                })
            }
            res.status(200).json(reponse);
        })
        .catch(err => {
            res.status(500).json({
                code: err.status,
                error: err,
                name: err.name,
                stack: err.stack
            });
        });
}

// exports.singleRideOffer = (req, res, next) => {
//     for (i = 0; i <= rides.rideOffers.length; i++) {
//         if (req.params.id == i) {
//             res.status(200).json({
//                 "success": true,
//                 "message": "Ride offer retrived successfully",
//                 "data": rides.rideOffers[req.params.id]
//             });
//         }
//     }
// }

// exports.newRide = (req, res, next) => {

//     const obj = req.body;
//     const lastElement = rides.rideOffers[rides.rideOffers.length - 1];
//     const constObjt = { id: lastElement.id + 1, "createdAt": new Date(), "updatedAt": new Date() };
//     //create new object with id,date coloumns
//     const newObject = { ...constObjt, ...obj };
//     //create new array of ride offers
//     rides.rideOffers.push(newObject);
//     res.status(200).json({
//         "success": true,
//         "message": "Ride offer added successfully",
//         "data": newObject
//     });
// }

// exports.joinRide = (req, res, next) => {
//     const obj = req.body;
//     const constObjt = { "createdAt": new Date(), "updatedAt": new Date() };
//     //create new object with date coloumns

//     const requestObject = { ...constObjt, ...obj };
//     const request = { "request": requestObject }

//     for (i = 0; i <= rides.rideOffers.length; i++) {
//         if (req.params.id == i) {
//             const prevObject = rides.rideOffers[req.params.id]
//             const newObject = { ...prevObject, ...request }
//             res.status(200).json({
//                 "success": true,
//                 "message": "Ride offer retrived successfully",
//                 "data": newObject
//             });
//         }
//     }
// }