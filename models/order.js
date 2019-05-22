'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        nr: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: true,
        }
    }, {});

    Order.associate = function (models) {
        Order.belongsToMany(models.Process, {through: 'Process_Order'});
        Order.hasOne(models.Lorry);
    };
    return Order;
};