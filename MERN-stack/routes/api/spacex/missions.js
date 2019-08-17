const router = require('express').Router();

const { findAll, findOne } = require('../../../controllers').missionsController;

router.use('/:mission_id', findOne);
router.use('/', findAll);

module.exports = router;
