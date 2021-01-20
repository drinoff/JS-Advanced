function solve(input){
    let operators = {
        '+' : (a,b)=>a+b,
        '-' : (a,b)=>a-b,
        '*' : (a,b)=>a*b,
        '/' : (a,b)=>a/b,
    }
    let arr = [];
    let error = false;
    for (const el of input) {
        if(Number.isInteger(el)){
            arr.push(el);
        }
        else{
            if(arr.length<2){
                console.log('Error: not enough operands!');
                error = true;

            }
            let first = arr.pop();
            let second = arr.pop();
            arr.push(operators[el](second,first));

        }
    }
    if(arr.length===1 && error === false){
       console.log(arr[0]);
    }else if (error === false){
        console.log('Error: too many operands!');
    }



}
solve([15,
    '/']


);