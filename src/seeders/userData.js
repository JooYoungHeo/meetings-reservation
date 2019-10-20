'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user', [
            {
                name: 'peter',
                team: 'infra'
            },
            {
                name: 'tom',
                team: 'dev'
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user', null, {});
    }
}