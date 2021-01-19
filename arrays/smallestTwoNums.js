function solve(input){

    console.log(input.sort((a,b)=>a-b)
           .slice(0,2)
           .join(' '));

}
solve([30, 15, 50, 5]);