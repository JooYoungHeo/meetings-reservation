import {gql} from 'apollo-server-koa';

export const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        team: String!
    }

    type Room {
        id: Int!
        name: String!
        size: Int!
    }

    type Reservation {
        id: Int!
        start: Date!
        end: Date!
        user: User!
        room: Room!
    }

    scalar Date

    type Query {
        getReservationsThisWeek: [Reservation]
        getEmptyRooms(start: Date!, end: Date!): [Room]
    }

    type Mutation {
        reserveRoom(start: Date!, end: Date!, userId: Int!, roomId: Int!): Reservation
    }
`;