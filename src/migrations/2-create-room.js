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
                type: Sequelize.ENUM('4','6','8')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('room')
    }
}