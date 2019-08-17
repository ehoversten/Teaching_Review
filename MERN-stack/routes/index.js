const router = require('express').Router();
const passport = require('passport');
const { profileJWT } = require('./secureRoutes');

const apiRoutes = require('./api');

//setting up routes
router.use('/api', apiRoutes);

router.route('/').get((req, res) => {
    res.json({
        msg: 'ok root'
    });
});

router.use(
    '/user',
    passport.authenticate('jwt', { session: false }),
    profileJWT
);

module.exports = router;
