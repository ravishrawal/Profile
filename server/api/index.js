const router = require('express').Router();


module.exports = router;

router.use('/projects', require('./projects'));
router.use('/experience', require('./experience'));
router.use('/education', require('./education'));
