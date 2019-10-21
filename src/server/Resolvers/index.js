import {getThisWeek, validateDate} from '../Utils';
import {UnprocessableError, BadRequestError} from '../Errors';

export const resolvers = {
    Query: {
        /* 이번주 예약 내역 조회 */
        async getReservationsThisWeek (_, {}, {models}, {cacheControl}) {

            cacheControl.setCacheHint({maxAge: 60});

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
        /* 빈 회의실 목록 조회 */
        async getEmptyRooms (_, {start, end}, {models}, {cacheControl}) {

            cacheControl.setCacheHint({maxAge: 60});

            if (!validateDate(start) || !validateDate(end)) throw new BadRequestError();

            const rooms = await models.Room.findAll();
            const reservations = await models.Reservation.findAll({
                where: {
                    [models.Sequelize.Op.or]: [
                        {
                            start: {[models.Sequelize.Op.lte]: start},
                            end: {[models.Sequelize.Op.gt]: start}
                        }, {
                            start: {[models.Sequelize.Op.lt]: end},
                            end: {[models.Sequelize.Op.gte]: end}
                        }
                    ]
                }
            }).then(items => items.map(item => item.roomId));

            return rooms.filter(room => !reservations.includes(room.id));
        }
    },
    Mutation: {
        /* 예약 */
        async reserveRoom (_, {start, end, userId, roomId}, {models}) {

            if (!validateDate(start) || !validateDate(end)) throw new BadRequestError();

            const reservation = await models.Reservation.findOne({
                where: {
                    roomId,
                    [models.Sequelize.Op.or]: [
                        {
                            start: {[models.Sequelize.Op.lte]: start},
                            end: {[models.Sequelize.Op.gt]: start}
                        }, {
                            start: {[models.Sequelize.Op.lt]: end},
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