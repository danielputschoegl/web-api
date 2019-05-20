'use strict';
module.exports = (sequelize, DataTypes) => {
    const Part = sequelize.define('Part', {
        part_id: {
            type: DataTypes.BIGINT(10),
            allowNull: false,
            primaryKey: true
        },
        system_weigth: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {});
    Part.associate = function (models) {
        Part.belongsToMany(models.cBrick, {through: 'CBrick_Part'});
        Part.hasOne(models.OrderScan);
    };
    return Part;
};