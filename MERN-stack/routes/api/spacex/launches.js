const router = require('express').Router();

const { findAll, findOne } = require('../../../controllers').launchesController;

router.use('/:flight_number', findOne);
router.use('/', findAll);

module.exports = router;
