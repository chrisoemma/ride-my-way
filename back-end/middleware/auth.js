const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const JWTstrategy = require('passport-jwt').Strategy;
const bcrypt = require('bcrypt');
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, cb) {

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


passport.use(new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey: process.env.JWT_KEY,
    //we expect the user to send the token as a query paramater with the name 'secret_token'
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        //Pass the user details to the next middleware
        return done(null, token.user);
    } catch (error) {
        done(error);
    }
}));