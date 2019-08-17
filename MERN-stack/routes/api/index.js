const router = require('express').Router();
const { launches, rockets } = require('./spacex');

router.use('/rockets', rockets);
router.use('/launches', launches);

router.route('/').get((req, res) => {
    res.json({
        msg: 'ok api'
    });
});

module.exports = router;
