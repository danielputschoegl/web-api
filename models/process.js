'use strict';
module.exports = (sequelize, DataTypes) => {
    const Process = sequelize.define('Process', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
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
        Process.belongsToMany(models.cBrick, {through: 'Process_cBrick'});
    };
    return Process;
};