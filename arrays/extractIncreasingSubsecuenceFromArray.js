function increasingSubsecuenceFromArray(input){
    //let arr = [];
    let maxNum = Number.MIN_SAFE_INTEGER;
    let arr = [];

for (let i = 0; i < input.length; i++) {
    if(input[i]>=maxNum){
        maxNum = input[i];
        //arr.push(input[i]);
        arr.push(input[i])
    }
    
}
return arr;
}
increasingSubsecuenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    )