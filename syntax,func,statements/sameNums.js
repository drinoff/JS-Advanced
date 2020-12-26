function sameNums(input){
    let sum = 0;
    let inputforSum = input;
let result = input%10;
let isTrue = true;
let division;
let modulo = 0;

while (input>1) {
    let division = input%10;
    if(division !== result){        
        isTrue = false;
        break;
    }
    input = Math.floor(input/10);
}

while (inputforSum>=1) {
    let division = inputforSum%10;
    sum +=division;
    inputforSum = Math.floor(inputforSum/10);
}

if(isTrue){
    console.log(true);
}else{
    console.log(false);
}

console.log(sum);
}
sameNums(1234)