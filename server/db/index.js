const db = require('./conn');

//Models
const Recipe = require('./Recipe');

//Associations

module.exports = {
  db,
  models:{
    Recipe
  }
};
