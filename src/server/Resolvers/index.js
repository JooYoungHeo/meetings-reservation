import {getThisWeek} from '../Utils';
import {UnprocessableError} from '../Errors';

export const resolvers = {
    Query: {
        async getReservationsThisWeek (_, {}, {models}) {
            const [begin, finish] = getThisWeek();

            return models.Reservation.findAll({
                where: {
                    [models.Sequelize.Op.or]: [
                        {
                            [models.Sequelize.Op.and]: [
                                {start: {[models.Sequelize.Op.gte]: begin}},
                                {start: {[models.Sequelize.Op.lt]: finish}}
                            ]
                        }, {
                            [models.Sequelize.Op.and]: [
                                {end: {[models.Sequelize.Op.gte]: begin}},
                                {end: {[models.Sequelize.Op.lt]: finish}}
                            ]
                        }
                    ]
                },
                include: [{model: models.User, as: 'user'}, {model: models.Room, as: 'room'}]
            });
        },
        async getEmptyRooms (_, {start, end}, {models}) {
            const rooms = await models.Room.findAll();
            const reservations = await models.Reservation.findAll({
                where: {
                    [models.Sequelize.Op.or]: [
                        {
                            start: {[models.Sequelize.Op.lte]: start},
                            end: {[models.Sequelize.Op.gte]: start}
                        }, {
                            start: {[models.Sequelize.Op.lte]: end},
                            end: {[models.Sequelize.Op.gte]: end}
                        }
                    ]
                }
            }).then(items => items.map(item => item.roomId));

            return rooms.filter(room => !reservations.includes(room.id));
        }
    },
    Mutation: {
        async reserveRoom (_, {start, end, userId, roomId}, {models}) {
            const reservation = await models.Reservation.findOne({
                where: {
                    roomId,
                    [models.Sequelize.Op.or]: [
                        {
                            start: {[models.Sequelize.Op.lte]: start},
                            end: {[models.Sequelize.Op.gte]: start}
                        }, {
                            start: {[models.Sequelize.Op.lte]: end},
                            end: {[models.Sequelize.Op.gte]: end}
                        }
                    ]
                }
            });

            if (reservation) throw new UnprocessableError();

            return models.Reservation.create({
                start, end, userId, roomId
            });
        }
    }
};