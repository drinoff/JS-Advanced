function solve(input){


numArr = input.map(Number);
let result = numArr[0]+ numArr[numArr.length-1];
return result;
}
solve(['20', '30', '40'])