function solve(input){
let food= {};

for (let i = 0; i < input.length; i++) {
    
    food[input[i]] = Number(input[i+1]);
    i++;
}
console.log(food)

}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])