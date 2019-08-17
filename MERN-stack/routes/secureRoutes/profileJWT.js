const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/profile', (req, res, next) => {
    //let req.query.t be anything but keep it in mind because that is how you'll refer to the token!
    let token = req.query.t;

    try {
        jwt.verify(token, process.env.JWT_SECRETKEY, (err, decoded) => {
            if (err) throw err;
            if (decoded.user) res.status(200).json(decoded);
        });
    } catch (error) {
        return res.status(401).json(error.message);
    }
});

module.exports = router;
