const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('@root/sequelize-config')
class User extends Model { }

User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Not-Set'
    }




}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User',
    tableName: 'users'

});

User.sync({ alter: true });

module.exports = User;
