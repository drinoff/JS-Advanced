function solve(input){
let filteredArr = [];
for (let i = 0; i < input.length; i++) {
    if(i%2!=0){
filteredArr.push(input[i]);
    }
    
}
console.log(filteredArr.map(x=>x*2)
                       .reverse());
}
solve([3, 0, 10, 4, 7, 3]);