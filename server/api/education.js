const router = require('express').Router();

module.exports = router;

const { Education } = require('../db').models;

router.get('/', (req, res) => {
  Education.findAll({
    where: req.query
  })
  .then(education => res.send(education))
  .catch(er => console.log('error finding all education: ', er.message));
});
