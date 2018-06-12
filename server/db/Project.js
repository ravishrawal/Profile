const db = require('./conn');
const { Sequelize } = db;

const project = db.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pics: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  field: {
    type: Sequelize.STRING,
  },
});

module.exports = project;
