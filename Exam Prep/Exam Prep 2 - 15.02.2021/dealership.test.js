const expect = require('chai').expect;
const assert = require('chai').assert;
const dealership = require('./dealership');


describe("dealershipTests", function() {
    describe("newCarCost", function() {
        it("works when no proper oldCar", function() {
        expect(dealership.newCarCost('lada',10)).to.be.equal(10);
        });

        it("works when proper oldCar", function() {
            expect(dealership.newCarCost('Audi TT 8J',30000)).to.be.equal(16000);
        });
    });

    describe("carEquipmentTests", function() {
        it("works correct", function() {
            assert.deepEqual(dealership.carEquipment(['pesho','gosho','stamat'],[0,1]),['pesho','gosho']);
        });
        it("works correct with no selected Equipment", function() {
            assert.deepEqual(dealership.carEquipment(['pesho','gosho','stamat'],[1]),['gosho']);
        });

    });

    describe("euroCategoryTests", function() {
        it("works correct when arg is 4 or more", function() {
            assert.equal(dealership.euroCategory(5),'We have added 5% discount to the final price: 14250.');
        });

        it("works correct when arg less than 4", function() {
            assert.equal(dealership.euroCategory(3),'Your euro category is low, so there is no discount from the final price!');
        });

        it("works correct when arg edge case", function() {
            assert.equal(dealership.euroCategory(4),'We have added 5% discount to the final price: 14250.');
        });
    });


});
