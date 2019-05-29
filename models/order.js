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
        lorryClosingEntry: { // Lorry fertig geladen, alle Parts liegen drauf
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {});

    Order.associate = function (models) {
        Order.belongsToMany(models.Process, {through: 'Process_Order'});
        Order.hasMany(models.OrderScan);
        Order.hasOne(models.Lorry);
    };
    return Order;
};