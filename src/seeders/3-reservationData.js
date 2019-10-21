'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('reservation', [
            {start: '2019-10-21 16:00', end: '2019-10-21 17:00', userId: 1, roomId: 2},
            {start: '2019-10-22 09:00', end: '2019-10-22 09:30', userId: 1, roomId: 1},
            {start: '2019-10-23 10:00', end: '2019-10-23 11:00', userId: 1, roomId: 2},
            {start: '2019-10-24 09:40', end: '2019-10-24 10:00', userId: 1, roomId: 2},
            {start: '2019-10-25 16:00', end: '2019-10-25 17:00', userId: 1, roomId: 2},
            {start: '2019-10-26 13:00', end: '2019-10-26 15:00', userId: 1, roomId: 3},
            {start: '2019-10-27 13:00', end: '2019-10-27 15:00', userId: 1, roomId: 3},
            {start: '2019-10-29 10:00', end: '2019-10-29 11:00', userId: 1, roomId: 2},
            {start: '2019-10-29 16:00', end: '2019-10-29 16:30', userId: 1, roomId: 1},
            {start: '2019-11-01 16:30', end: '2019-11-01 17:00', userId: 1, roomId: 1},
            {start: '2019-11-02 17:30', end: '2019-11-02 18:30', userId: 1, roomId: 2},
            {start: '2019-10-21 15:30', end: '2019-10-21 16:30', userId: 2, roomId: 1},
            {start: '2019-10-22 09:30', end: '2019-10-22 09:50', userId: 2, roomId: 1},
            {start: '2019-10-23 15:00', end: '2019-10-23 15:30', userId: 2, roomId: 2},
            {start: '2019-10-25 15:00', end: '2019-10-25 17:00', userId: 2, roomId: 3},
            {start: '2019-10-26 10:00', end: '2019-10-26 11:30', userId: 2, roomId: 3},
            {start: '2019-10-27 14:00', end: '2019-10-27 15:00', userId: 2, roomId: 2},
            {start: '2019-10-30 10:00', end: '2019-10-30 10:30', userId: 2, roomId: 1},
            {start: '2019-10-30 14:30', end: '2019-10-30 15:00', userId: 2, roomId: 1},
            {start: '2019-11-01 13:30', end: '2019-11-01 14:30', userId: 2, roomId: 2},
            {start: '2019-11-02 17:00', end: '2019-11-02 17:30', userId: 2, roomId: 2}
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('reservation', null, {});
    }
};