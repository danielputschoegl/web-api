'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrderScan = sequelize.define('OrderScan', {
        weigth: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, {});
    OrderScan.associate = function (models) {
      OrderScan.belongsTo(models.Lorry);
      OrderScan.belongsTo(models.Part);
    };
    return OrderScan;
};