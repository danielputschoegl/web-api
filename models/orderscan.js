'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrderScan = sequelize.define('OrderScan', {
        weight: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    }, {});
    OrderScan.associate = function (models) {
      OrderScan.belongsTo(models.Lorry);
      OrderScan.belongsTo(models.Part);
    };
    return OrderScan;
};