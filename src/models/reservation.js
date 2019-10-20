'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Room',
        key: 'id'
      }
    }
  }, {
    tableName: 'reservation',
    timestamps: false,
    indexes: [
      {unique: false, fields: ['start']},
      {unique: false, fields: ['end']}
    ]
  });
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
    Reservation.belongsTo(models.Room, {foreignKey: 'roomId', as: 'room'});
  };
  return Reservation;
};