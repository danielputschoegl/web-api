'use strict';
module.exports = (sequelize, DataTypes) => {
    const Lorry = sequelize.define('Lorry', {
    }, {});
    Lorry.associate = function (models) {
        Lorry.belongsTo(models.Order);
    };
    return Lorry;
};