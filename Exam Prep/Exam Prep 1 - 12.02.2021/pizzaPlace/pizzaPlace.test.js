expect = require('chai').expect;
assert = require('chai').assert;
pizzUni = require('./pizzaPlace');
describe = require('mocha').describe;






describe('pizzaPlaceTests', function(){

    let orderObj = {
        orderedPizza: 'margharitta',
        orderedDrink: 'Coca Cola'

    }
    let readyPizza = {
        pizzaName: 'pizza',
        status: 'ready'

    }

    let preparingPizza = {
        pizzaName: 'pizza2',
        status: 'preparing'

    }

    let orderObjnoDrink = {
        orderedPizza: 'margharitta',
        orderedDrink: ''
    }
    let orderObjnoPizza = {
        orderedPizza: '',
        orderedDrink: 'Coca Cola'
    }

    describe('makeOrderTests',function(){
        it('creates Order Successfully',function(){
            expect(pizzUni.makeAnOrder(orderObj)).to.be.equal(`You just ordered ${orderObj.orderedPizza} and ${orderObj.orderedDrink}.`)
        })

        it('error when no pizza',function(){
            assert.throw(()=>pizzUni.makeAnOrder(orderObjnoPizza),'You must order at least 1 Pizza to finish the order.');
        })

        it('successful result when no drink',function(){
            expect(pizzUni.makeAnOrder(orderObjnoDrink)).to.be.equal(`You just ordered ${orderObjnoDrink.orderedPizza}`)
        })

        it('Error when empty obj',function(){
            assert.throw(()=>pizzUni.makeAnOrder({}),'You must order at least 1 Pizza to finish the order.');
        })



    });

    describe('getRemainingWorkTests',function(){
        let statusArr = [readyPizza,preparingPizza]
        let statusArr2 = [readyPizza]
        it('returns remaining pizzas',function(){
            expect(pizzUni.getRemainingWork(statusArr)).to.be.equal(`The following pizzas are still preparing: pizza2.`)
        })
        it('returns all done',function(){
            expect(pizzUni.getRemainingWork(statusArr2)).to.be.equal('All orders are complete!')
        })


    });

    describe('orderTypeTests',function(){
       it('carry out totalsum -10%', function(){
           expect(pizzUni.orderType(1,'Carry out')).to.be.equal(0.9)
       })
        it('delivery totalsum ', function(){
            expect(pizzUni.orderType(1,'Delivery')).to.be.equal(1)
        })


    });

});