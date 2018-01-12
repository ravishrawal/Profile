const db = require('./conn');
const { Sequelize } = db;

const Recipe = db.define('recipe', {
  name: Sequelize.STRING,
  carbs: Sequelize.INTEGER,
  protein: Sequelize.INTEGER,
  sugar: Sequelize.INTEGER,
  fat: Sequelize.INTEGER,
  healthLabels: Sequelize.ARRAY(Sequelize.STRING),
  image: Sequelize.STRING,
  url: Sequelize.STRING
});

module.exports = Recipe;
