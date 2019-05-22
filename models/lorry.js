'use strict';
module.exports = (sequelize, DataTypes) => {
    const Lorry = sequelize.define('Lorry', {
        weight: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    }, {});
    Lorry.associate = function (models) {
        Lorry.belongsTo(models.Order);
        Lorry.hasMany(models.OrderScan);
        Lorry.hasMany(models.Record)
    };
    return Lorry;
};