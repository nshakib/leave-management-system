const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('leave_management', 'root', '', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql'
});

module.exports = sequelize;
