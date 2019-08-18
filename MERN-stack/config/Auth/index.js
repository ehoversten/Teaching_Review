const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const { userModel } = require('../../models');

// Creates a passport middleware to handle user registration
passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        async (username, password, done) => {
            try {
                const user = await userModel.findOne({ username });

                if (user) {
                    done(
                        JSON.stringify(
                            { message: `user ${user.username} already exists` },
                            null,
                            4
                        )
                    );
                } else {
                    userModel.create({ username, password });
                    return done({ message: 'OK', status: 200 }, user);
                }
            } catch (error) {
                return done(`ERROR: ${JSON.stringify(error, null, 2)}`);
            }
        }
    )
);

//user login part
passport.use(
    'login',
    new localStrategy(
        { usernameField: 'username', passwordField: 'password' },
        async (username, password, done) => {
            try {
                //1. try to find the username in db
                const user = await userModel.findOne({ username });

                //2. if cannot find the user, send a msg saying not found
                if (!user) {
                    return done(null, false, { message: 'User not found!' });
                }

                //3. Validate password
                const validate = await user.isValidPassword(password);

                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' });
                }

                //4. If validate = true, send the user info to the next middleware
                return done(null, user, { message: 'Logged in successfully!' });
            } catch (error) {
                return done(`ERROR: ${JSON.stringify(error, null, 2)}`);
            }
        }
    )
);

//this verifies that the token sent by the used is valid
passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.JWT_SECRETKEY,
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter('t')
        },
        async (token, done) => {
            try {
                //pass the user details to the next middleware
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);
