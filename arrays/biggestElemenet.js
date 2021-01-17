function solve(input){
let biggie = Number.MIN_SAFE_INTEGER;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if(input[row][col]>=biggie){
                biggie = input[row][col];
            }
            
        }
    }
  
    return biggie;

}
solve([[20, 50, 10],
       [8, 33, 145]]
   );