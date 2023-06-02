const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs', 'postgres', 'saugat', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;