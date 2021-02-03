const mathEnforcer = require('./mathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer',()=>{
    describe('addFive',()=> {
        it('undefined when parameter is not a number', () => {
            expect(mathEnforcer.addFive('asd')).to.be.equal(undefined);
        });
        it('correct result when parameter is a number', () => {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
        });
        it('correct when parameter is floating point number',()=> {
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5,0.0001)
        });
        it('correct when parameter is negative number',()=> {
            expect(mathEnforcer.addFive(-2)).to.be.equal(3);
        });


    });

    describe('subtractTen',()=>{
        it('undefined when parameter is not a number',()=> {
            expect(mathEnforcer.subtractTen('asd')).to.be.equal(undefined);
        });
        it('correct result when parameter is a number', () => {
            expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
        });
        it('correct when parameter is floating point number',()=> {
            expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5,0.0001)
        });
        it('correct when parameter is negative number',()=> {
            expect(mathEnforcer.subtractTen(-3)).to.be.equal(-13);
        });
    });

    describe('sum',()=>{
        it('undefined when first parameter is not a number',()=> {
            expect(mathEnforcer.sum('asd',1)).to.be.equal(undefined);
        });
        it('undefined when second parameter is not a number',()=> {
            expect(mathEnforcer.sum(1,'asd')).to.be.equal(undefined);
        });
        it('correct result when both parameters are a number', () => {
            expect(mathEnforcer.sum(1,2)).to.be.equal(3);
        });
        it('correct when parameters are floating point number',()=> {
            expect(mathEnforcer.sum(1.5,1.6)).to.be.closeTo(3.1,0.0001)
        });
        it('correct when parameters are negative numbers',()=> {
            expect(mathEnforcer.sum(-2,-1)).to.be.equal(-3);
        });
    });



});