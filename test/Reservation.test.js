const {expect} = require('chai');

const url = `http://localhost:4000`;
const request = require('supertest');

describe('GraphQL', () => {
    it('returns empty rooms', (done) => {
        request(url)
            .post('/graphql')
            .send({ query: '{ getEmptyRooms(start:"2019-10-21 14:00", end:"2019-10-21 14:30") { id size } }'})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                const data = res.body.data.getEmptyRooms;

                expect(res.status).to.be.eq(200);
                expect(data).to.be.a('array');

                if (data.length > 0) {
                    data.forEach(item => {
                        expect(item).to.have.all.keys('id', 'size')
                    });
                }

                done();
            });
    });

    it('returns this week reservations', (done) => {
        request(url)
            .post('/graphql')
            .send({ query: '{ getReservationsThisWeek { id start end room { id name size } user { id name team } } }'})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                const data = res.body.data.getReservationsThisWeek;

                expect(res.status).to.be.eq(200);
                expect(data).to.be.a('array');

                if (data.length > 0) {
                    data.forEach(item => {
                        expect(item).to.have.all.keys('id', 'start', 'end', 'room', 'user');
                    });
                }

                done();
            });
    });
});