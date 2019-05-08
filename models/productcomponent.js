'use strict';
module.exports = (sequelize, DataTypes) => {
    const ProductComponent = sequelize.define('ProductComponent', {
        step: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        indexes: [{
            unique: true,
            fields: ['step', 'productId', 'componentId']
        }]
    });
    ProductComponent.associate = function (models) {
        ProductComponent.belongsTo(models.Product);
        ProductComponent.belongsTo(models.Component);
    };
    return ProductComponent;
};