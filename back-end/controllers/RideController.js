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
                            url: 'localhost:4000/api/v1/rides/' + doc.id
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

exports.singleRideOffer = (req, res, next) => {
    const id = req.params.id;
    Ride.findByPk(id)
        .then(doc => {
            res.status(200).json({
                code: 200,
                message: 'Succesfully',
                count: doc.length,
                data: {
                    id: doc.id,
                    passengerId: doc.userId,
                    pickupArea: doc.pickupArea,
                    Destination: doc.destination,
                    status: doc.status,
                    createdAt: doc.createdAt,
                    updatedAt: doc.updatedAt
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: err.status,
                error: err,
                name: err.name,
                stack: err.stack
            });
        });
}

exports.newRide = (req, res, next) => {
    const ride = Ride.build({
        userId: 2,
        pickupArea: 'Canada',
        destination: req.body.destination,
        status: '',
        createdAt: new Date(),
        updatedAt: new Date()
    });
    ride
        .save()
        .then(result => {
            res.status(200).json({
                code: 201,
                message: "Succesfully",
                createdProduct: {
                    id: result.id,
                    passengerId: result.userId,
                    pickupArea: result.pickupArea,
                    Destination: result.destination,
                    status: result.status,
                    createdAt: result.createdAt,
                    updatedAt: result.updatedAt,
                    request: {
                        type: 'POST',
                        url: 'http://localhost:4000/rides/' + result.id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        });

}

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