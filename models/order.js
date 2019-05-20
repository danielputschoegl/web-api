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
        Order.belongsToMany(models.Process, {through: 'Process_Order'});
        Order.hasOne(models.Lorry);
    };
    return Order;
};