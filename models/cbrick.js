'use strict';
module.exports = (sequelize, DataTypes) => {
    const cBrick = sequelize.define('cBrick', {
        cBrick_id: {
            type: DataTypes.BIGINT(10),
            allowNull: false,
            primaryKey: true
        },
        actual_time: {
            type: DataTypes.FLOAT, // in seconds
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {});
    cBrick.associate = function (models) {
        cBrick.belongsToMany(models.Process, {through: 'Process_CBrick'});
        cBrick.belongsToMany(models.Part, {through: 'CBrick_Part'});
    };
    return cBrick;
};