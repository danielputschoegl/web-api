'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
  }, {});
  Record.associate = function(models) {
    Record.belongsTo(models.Lorry);
  };
  return Record;
};