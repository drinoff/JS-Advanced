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
   let colSum = 0;
   let k = 0;
   let limit = input.length;

   for (let k = 0; k < limit; k++) {      
     for (let row = 0; row < input.length; row++) {
        colSum +=input[row][k];
       
     }
     if(colSum!==sum){
        isMagic = false;
        break;
    }
    colSum = 0;
   }
  

   
    console.log(isMagic);

}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   
   
   )