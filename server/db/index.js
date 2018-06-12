const db = require('./conn');

//Models
const Project = require('./Project');
const Experience = require('./Experience');
const Education = require('./Education');

//Associations

module.exports = {
  db,
  models:{
    Project,
    Experience,
    Education,
  }
};
