const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

/**
 * Sets JWT expires time. There is no manual logout.
 * @example
 * 'time+first letter of measurement' ex: '1m', '1h' , '1d'
 */

const jwtExpireTime = '5m';

// registering user
router.post(
    '/registeruser',
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
        let jsonUSER = JSON.stringify(req.user, null, 2);
        res.send({
            code: 200,
            message: 'OK',
            user: jsonUSER
        });
    }
);

//login
router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            //if there's an error or user doesn't exist
            if (err || !user) {
                const error = new Error('Login info might not be correct..');
                return next(error);
            }

            req.login(user, { session: false }, err => {
                if (err) return next(JSON.stringify(err, null, 2));

                // gathering the info needed to send, as an object
                const body = {
                    _id: user._id,
                    username: user.username
                };

                //signing the JWT token and populating with the payload 'body'
                const token = jwt.sign(
                    { user: body },
                    process.env.JWT_SECRETKEY,
                    {
                        expiresIn: jwtExpireTime
                    }
                );

                return res.json({ code: 200, message: info.message, token });
            });
        } catch (error) {
            return next(JSON.stringify(error, null, 2));
        }
    })(req, res, next);
});

module.exports = router;
