'use strict';
module.exports = (sequelize, DataTypes) => {
    const Part = sequelize.define('Part', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        system_weight: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {});
    Part.associate = function (models) {
        Part.hasMany(models.cBrick_Part);
        Part.hasOne(models.OrderScan);
    };
    return Part;
};