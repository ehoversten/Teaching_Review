const router = require('express').Router();

const { findAll, findOne } = require('../../../controllers').rocketsController;

router.use('/:rocket_id', findOne);
router.use('/', findAll);

module.exports = router;
