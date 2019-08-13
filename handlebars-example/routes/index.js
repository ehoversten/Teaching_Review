const router = require('express').Router();

//routes
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
