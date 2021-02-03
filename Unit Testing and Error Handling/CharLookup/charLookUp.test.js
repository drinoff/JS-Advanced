const lookupChar = require('./charLookUp');
const expect = require('chai').expect;

describe('charLookUp',()=>{
    let string = 'asdf';
    it('undefined when first parameter is not string',()=>{
        expect(lookupChar(12,1)).to.be.equal(undefined);
    });
    it('undefined when seccond parameter is double',()=>{
        expect(lookupChar(string,1.5)).to.be.equal(undefined);
    });
    it('undefined when second parameter is not number',()=>{
        expect(lookupChar(string,'1')).to.be.equal(undefined);
    });
    it('undefined when first parameter is empty string',()=>{
        expect(lookupChar('','1')).to.be.equal(undefined);
    });
    it('return incorrect index when second parameter value is negative',()=>{
        expect(lookupChar(string,-4)).to.be.equal("Incorrect index");
    });
    it('return incorrect index when second parameter value is bigger than string length',()=> {
        expect(lookupChar(string, 5)).to.be.equal("Incorrect index");
    });
    it('return incorrect index when second parameter value is equal to string length',()=> {
        expect(lookupChar(string, 4)).to.be.equal("Incorrect index");
    });
    it('works correct with all parameters and values correct',()=> {
        expect(lookupChar(string, 2)).to.be.equal("d");
    });


});