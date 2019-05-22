'use strict';
module.exports = (sequelize, DataTypes) => {
    const cBrick = sequelize.define('cBrick', {
        id: {
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
        cBrick.belongsToMany(models.Process, {through: 'Process_cBrick'});
        cBrick.belongsToMany(models.Part, {through: 'cBrick_Part'});
    };
    return cBrick;
};