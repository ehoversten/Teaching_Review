const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ msg: 'ok!' });
});

module.exports = router;
