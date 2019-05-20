'use strict';
module.exports = (sequelize, DataTypes) => {
    const Process = sequelize.define('Process', {
        process_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        is_milestone: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {});
    Process.associate = function (models) {
        Process.belongsToMany(models.Order, {through: 'OrderProcess'});
        Process.hasMany(models.cBrick);
    };
    return Process;
};