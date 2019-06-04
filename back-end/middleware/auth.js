const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const JWTStrategy = require('passport-jwt').Strategy;
const bcrypt = require('bcrypt');
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    (email, password, cb) => {

        User.findOne({ where: { email: email } })
            .then(user => {
                //check for password match
                bcrypt.compare(password, user.dataValues.password, (err, isMatch) => {

                    if (isMatch) {
                        return cb(null, user, {
                            message: 'Logged In Successfully'
                        });
                    } else {
                        return cb(null, false, { message: 'Incorrect email or password.' });
                    }
                })
            })
            .catch(err => {
                return cb(err);
            });
    }
));


passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY
},
    (token, cb) => {
        try {
            //Pass the user details to the next middleware
            return cb(null, token.user);
        } catch (error) {
            cb(error);
        }
    }
));