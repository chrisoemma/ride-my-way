const Sequelize = require('sequelize');
const db = require('../config/database');
const Ride = db.define('ride', {
    // attributes
    userId: {
        type: Sequelize.INTEGER
    },
    pickupArea: {
        type: Sequelize.STRING
    },
    destination: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    }
});

module.exports = Ride;