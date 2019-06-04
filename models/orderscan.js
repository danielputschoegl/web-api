'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrderScan = sequelize.define('OrderScan', {
        weight: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        onLorry: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }

    }, {});
    OrderScan.associate = function (models) {
        OrderScan.belongsTo(models.Order);
        OrderScan.belongsTo(models.Part);
    };
    return OrderScan;
};