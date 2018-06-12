const router = require('express').Router();

module.exports = router;

const { Experience } = require('../db').models;

router.get('/', (req, res) => {
  Experience.findAll({
    where: req.query
  })
  .then(experience => res.send(experience))
  .catch(er => console.log('error finding all experience: ', er.message));
});
