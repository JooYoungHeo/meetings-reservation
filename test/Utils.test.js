const {getThisWeek, validateDate} = require('../src/server/Utils');
const {expect} = require('chai');

describe('Utils', () => {
    it('get this week', (done) => {
        const list = getThisWeek();

        expect(list).to.be.a('array');
        expect(list).to.have.length(2);

        list.forEach(item => {
            expect(item instanceof Date).to.equal(true);
        });

        done();
    });

    it('validate date', (done) => {
        const result1 = validateDate('2019-10-20 10:30');
        const result2 = validateDate('2019/10/20 10:30');
        const result3 = validateDate('2019-10-20 :30');
        const result4 = validateDate();

        expect(result1).to.equal(true);
        expect(result2).to.equal(false);
        expect(result3).to.equal(false);
        expect(result4).to.equal(false);

        done();
    });
});