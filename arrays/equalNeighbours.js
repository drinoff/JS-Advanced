function solve(input){
let pairs = 0;
for (let row = 0; row < input.length-1; row++) {
    for (let col = 0; col < input[row].length; col++) {
        
        if(input[row][col]===input[row+1][col]){
            pairs +=1;
        }
        
    }
    
}
for (let i = 0; i < input.length; i++) {
    for (let k = 0; k < input[i].length-1; k++) {
        if(input[i][k] === input[i][k+1]){
            pairs +=1;
        }
        
    }
    
}
return pairs;

}
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

);