'use strict';
module.exports = (sequelize, DataTypes) => {
    const cBrick_Part = sequelize.define('cBrick_Part', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sequence: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['part_id', 'sequence']
            }
        ]
    });
    cBrick_Part.associate = function (models) {
        cBrick_Part.belongsTo(models.cBrick);
        cBrick_Part.belongsTo(models.Part);
    };
    return cBrick_Part;
};