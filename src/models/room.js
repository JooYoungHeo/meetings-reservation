'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.TINYINT(2).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'room',
	  timestamps: false
  });
  Room.associate = function(models) {
    Room.hasMany(models.Reservation, {foreignKey: 'roomId', as: 'reservation'});
  };
  return Room;
};