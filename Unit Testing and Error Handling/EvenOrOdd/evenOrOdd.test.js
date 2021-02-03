const expect = require('chai').expect;
const isOddOrEven = require('./evenOrOdd');


describe('EvenOrOdd',()=>{
    let testString = 12345;
    it('undefined when parameter is not a string', function () {
        expect(isOddOrEven(testString)).to.be.equal(undefined);
    });
    it('odd when string length is Odd',function (){
        expect(isOddOrEven('asd')).to.be.equal('odd');
    });
    it('even when the string length is even',()=>{
        expect(isOddOrEven('asdf')).to.be.equal('even');
    });


})