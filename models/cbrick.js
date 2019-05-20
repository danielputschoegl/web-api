'use strict';
module.exports = (sequelize, DataTypes) => {
    const cBrick = sequelize.define('cBrick', {
        cBrick_id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            unique: true
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
        cBrick.belongsToMany(models.Process, {through: 'ProcessCBrick'});
        cBrick.hasMany(models.Part);
    };
    return cBrick;
};