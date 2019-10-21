'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user', {
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
            team: {
                allowNull: false,
                type: Sequelize.STRING(16)
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('user')
    }
}