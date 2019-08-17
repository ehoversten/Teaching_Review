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
        res.json({
            code: 200,
            message: 'OK',
            user: req.user
        });
    }
);

//login
router.post('/login', async (req, res, next) => {
    try {
        if (err || !user) {
            const error = new Error('Login info might not be correct..');
            return next(error);
        }

        req.login(user, { session: false }, err => {
            if (err) return next(error);

            //stopped here until models/controllers/auth are done
            const body = {
                _id: user._id,
                username: user.username
            };
        });
    } catch (error) {}
});
