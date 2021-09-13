const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class jobposting extends Model {}
jobposting.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        job_title: {
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
            type: DataTypes.TEXT,
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

module.exports = jobposting;