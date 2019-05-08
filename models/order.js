'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        order_nr: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weigth: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {});
    Order.associate = function (models) {
        Order.hasOne(models.Product);
        Order.hasMany(models.OrderScan)
    };
    return Order;
};