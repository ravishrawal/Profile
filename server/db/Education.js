const db = require('./conn');
const { Sequelize } = db;

const education = db.define('education', {
  college: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  major: {
    type: Sequelize.STRING,
  },
  gradDate: {
    type: Sequelize.STRING,
  },
  coursework: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  gpa: Sequelize.FLOAT,
  achievements: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  field: Sequelize.STRING,
});

module.exports = education;
