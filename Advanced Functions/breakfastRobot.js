function solution(){
    let robot = {
        meals: {
            apple: {carbohydrate: 1, flavour: 2},
            lemonade: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            eggs: {protein: 5, fat: 1, flavour: 1},
            turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        },

        stock: {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        },

        restock(st,quantity){
            this.stock[st] +=Number(quantity);
            return 'Success';
        },

        prepare(meal,quantity){
            for (const mealElement in this.meals[meal]) {
                if(this.meals[meal][mealElement]*quantity > this.stock[mealElement]){
                    return `Error: not enough ${mealElement} in stock`;
                }

            }
            for (const mealElement in this.meals[meal]) {
                this.stock[mealElement] -= this.meals[meal][mealElement]*quantity;
            }
            return 'Success';
        },

        report(){
            return `protein=${this.stock["protein"]} carbohydrate=${this.stock["carbohydrate"]} fat=${this.stock["fat"]} flavour=${this.stock["flavour"]}`;
        }


    }
    return function manager(string){
        let [cmd,meal,quantity] = string.split(' ');
        return robot[cmd](meal,quantity);
    }


}
let manager = solution();
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
