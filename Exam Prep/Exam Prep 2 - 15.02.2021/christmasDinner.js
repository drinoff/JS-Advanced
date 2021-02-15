class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget() { return this._budget}
    set budget(value) {
        if(value <0){
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    shopping([type,price]){
        if(price>this._budget){
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(type);
        this._budget -=price;
        return `You have successfully bought ${type}!`
    }

    recipes({recipeName,productsList}){
        productsList.forEach(x=>{
        if(!this.products.includes(x)){
            throw new Error("We do not have this product");
        }
        })
        this.dishes.push({recipeName,productsList})
        return `${recipeName} has been successfully cooked!`

    }

    inviteGuests(name, dish) {
        let currentDish = this.dishes.find(x=>x.recipeName === dish)
        if (!currentDish) {
            throw new Error("We do not have this dish");
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        //"{name} will eat {dish}, which consists of {products}
        let returnString = '';
        for (const name in this.guests) {
            let currentProductList = this.dishes.find(x=>x.recipeName === this.guests[name]);
            returnString += `${name} will eat ${this.guests[name]}, which consists of ${currentProductList.productsList.join(', ')}`+'\n'
        }
        return returnString.trim();
    }
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

