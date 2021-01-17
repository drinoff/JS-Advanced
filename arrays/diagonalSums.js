function solve(input){
let primaryDiagonalSum = 0
let secondaryDiagonalSum = 0;

for (let row = 0; row < input.length; row++) {       
    primaryDiagonalSum +=input[row][row];
    secondaryDiagonalSum +=input[row][input.length-row-1];
          
       
}
console.log(`${primaryDiagonalSum} ${secondaryDiagonalSum}`);
}
solve([[20, 40],
       [10, 60]]
   );