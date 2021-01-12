function solve(input){
let isMagic = true;
    let sum = input[0].reduce((a,b)=>a+b);
    for (let i = 1; i < input.length; i++) {
        
        let nextSum = input[i].reduce((a,b)=>a+b);
        if(sum !== nextSum){
            isMagic = false;

            break;
        }
    }
    console.log(isMagic);
return isMagic;
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )