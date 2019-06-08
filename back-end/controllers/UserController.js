const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

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
                            .then(user => {
                                const body = {
                                    id: user.id, email: user.email,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    roleId: user.roleId
                                };
                                //Sign the JWT token and populate the payload with the user email and id
                                const token = jwt.sign(
                                    {
                                        user: body
                                    },
                                    process.env.JWT_KEY,
                                    {
                                        expiresIn: process.env.TOKEN_DURATION
                                    }
                                );

                                res.status(201).json({
                                    code: 201,
                                    message: 'User successfully created',
                                    user: body,
                                    token: token
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

exports.login = (req, res, next) => {

    passport.authenticate('local', { session: false }, (err, user, info) => {

        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user: user
            });
        }

        req.login(user, { session: false }, (err) => {
            if (err) next(err)
            const body = {
                id: user.id, email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                roleId: user.roleId
            };
            //Sign the JWT token and populate the payload with the user email and id
            const token = jwt.sign(
                {
                    user: body
                },
                process.env.JWT_KEY,
                {
                    expiresIn: process.env.TOKEN_DURATION
                }
            );

            return res.status(200).json({
                message: 'Succesfully login',
                user: body,
                token: token
            });
        });
    })
        (req, res);
}

exports.getAllUsers = (req, res, next) => {
    User
        .findAll()
        .then(docs => {
            const responce = {
                code: 200,
                mesaage: "Successfully",
                count: docs.length,
                users: docs.map(user => {
                    return {
                        id: user.id,
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        roleId: user.roleId,
                        request: {
                            type: "GET",
                            url: "http://localhost:4000/users/" + user.id
                        }
                    }
                })
            }
            res.status(200).json(responce);
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
}