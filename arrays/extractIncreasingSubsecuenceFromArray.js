function increasingSubsecuenceFromArray(input){
    //let arr = [];
    let maxNum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < input.length; i++) {
    if(input[i]>maxNum){
        maxNum = input[i];
        //arr.push(input[i]);
        console.log(input[i])
    }
    
}

}
increasingSubsecuenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    )