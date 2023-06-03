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
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }




}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User',
    tableName: 'users'

});

module.exports = User;
