'use strict';
module.exports = (sequelize, DataTypes) => {
  const Record = sequelize.define('Record', {
        weigth: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
  }, {});
  Record.associate = function(models) {
    Record.belongsTo(models.Lorry);
  };
  return Record;
};