const router = require('express').Router();
const Recipe = require('../db/Recipe');

module.exports = router;

router.use('/recipes', require('./recipes.js'));
