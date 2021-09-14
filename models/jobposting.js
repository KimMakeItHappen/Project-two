const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Jobposting extends Model {}

Jobposting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        content: {
            type: DataTypes.STRING,
                allowNull: false 
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'jobposting'
    }    
);

module.exports = Jobposting;