const router = require('express').Router();
const { launches, rockets, missions } = require('./spacex');

const user = require('./user');

router.use('/rockets', rockets);
router.use('/launches', launches);
router.use('/missions', missions);

router.use('/auth', user);

router.route('/').get((req, res) => {
    res.json({
        msg: 'ok api'
    });
});

module.exports = router;
