'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('room', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(16)
            },
            size: {
                allowNull: false,
                type: Sequelize.TINYINT(2).UNSIGNED
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('room')
    }
}