const router = require('express').Router();

module.exports = router;

const { Project } = require('../db').models;

router.get('/', (req, res) => {
  Project.findAll({
    where: req.query
  })
  .then(projects => res.send(projects))
  .catch(er => console.log('error finding all projects: ', er.message));
});
