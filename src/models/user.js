'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  	tableName: 'user',
	  timestamps: false
  });
  User.associate = function(models) {
    User.hasMany(models.Reservation, {foreignKey: 'userId', as: 'reservation'});
  };
  return User;
};
