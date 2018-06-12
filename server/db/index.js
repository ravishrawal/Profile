const db = require('./conn');

//Models
const project = require('./Project');
const experience = require('./Experience');
const education = require('./Education');

//Associations

module.exports = {
  db,
  models:{
    project,
    experience,
    education,
  }
};
