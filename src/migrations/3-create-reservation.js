'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('reservation', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            start: {
                allowNull: false,
                type: Sequelize.DATE
            },
            end: {
                allowNull: false,
                type: Sequelize.DATE
            },
            userId: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {
                    model: 'user',
                    key: 'id'
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            roomId: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {
                    model: 'room',
                    key: 'id'
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            }
        }).then(() => {
            queryInterface.addIndex('reservation', ['start'], {name: 'start_idx'});
            queryInterface.addIndex('reservation', ['end'], {name: 'end_idx'});
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('reservation')
    }
}