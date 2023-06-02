const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs', 'postgres', 'data-safety', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;