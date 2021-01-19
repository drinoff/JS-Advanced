function solve(...input){

let pies = input[0];

let startIndex = pies.indexOf(input[1]);
let endIndex = pies.indexOf(input[2]);
let result = pies.slice(startIndex,endIndex+1);
return result

}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);