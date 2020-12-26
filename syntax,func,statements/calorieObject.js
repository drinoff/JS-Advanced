function CreateObject(input){
let food = [];
let calories = [];


for (let i = 0; i < input.length; i++) {
    if(i%2==0){
        food.push(input[i]);
    }
    else{
        calories.push(Number(input[i]));
    }
    
}

let obj = {};
for (let i = 0; i < food.length; i++) {
    
    obj[food[i]] = calories[i];
}

console.log(obj);
}
CreateObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);