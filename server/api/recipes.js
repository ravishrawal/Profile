const router = require('express').Router();
const { Recipe } = require('../db').models;

module.exports = router;

router.get('/', (req, res, next) => {
  Recipe.findAll()
  .then(recipes => res.send(recipes))
  .catch(er => console.log(er));
})
