'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('room', [
            {
                name: 'sahara',
                size: 4
            },
            {
                name: 'antarctica',
                size: 6
            },
            {
                name: 'jupiter',
                size: 8
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('room', null, {});
    }
};