function solve(input){

let result = [];
input.map(x=>x>=0?result.push(x):result.unshift(x));
console.log(result);
}

solve([3, -2, 0, -1])