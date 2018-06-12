const db = require('./conn');
const { Sequelize } = db;

const experience = db.define('experience', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  field: {
    type: Sequelize.STRING,
  },
});

module.exports = experience;
