'use strict';
module.exports = (sequelize, DataTypes) => {
    const Component = sequelize.define('Component', {
        barcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        weigth: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {});
    Component.associate = function (models) {
        Component.hasMany(models.ProductComponent)
    };
    return Component;
};