const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res, next) => {
    User
        .findAll({ where: { email: req.body.email } })
        .then(user => {
            if (user.length >= 1) {

                res.status(409).json({
                    message: "Mail exists"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json(
                            {
                                error: err
                            }
                        )
                    } else {
                        const user = User.build({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            roleId: req.body.roleId,
                            email: req.body.email,
                            password: hash,
                            createdAt: new Date(),
                            updatedAt: new Date()
                        });
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    code: 201,
                                    message: 'User successfully created',
                                    data: {
                                        id: result.id,
                                        firstName: result.firstName,
                                        lastName: result.lastName,
                                        email: result.email,
                                        roleId: result.roleId

                                    }
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    message: err
                                })
                            });
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        });
}

