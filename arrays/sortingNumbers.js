function solve(input){
let sortedArr = [];
let arr = input.sort((a,b)=>a-b);
var iterations = arr.length/2;

for (let i = 0; i < iterations; i++) {
    
    let smallElement = arr.shift();
    let bigerElement = arr.pop();
    sortedArr.push(smallElement);
    sortedArr.push(bigerElement);
}

return sortedArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))