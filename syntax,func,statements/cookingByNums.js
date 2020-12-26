function cooking(input){
    let number = Number(input[0]);
    
   for (let i = 1; i < input.length; i++) {
       number = operation(number,input[i])              
    }

    
    function operation(number,op){
        if(op === 'chop'){
            number = number/2;
            console.log(number);
            return number;
        }
        else if(op === 'dice'){
            number = Math.sqrt(number);
            console.log(number);
            return number;
        }
        else if (op ==='spice'){
            number +=1;
            console.log(number);
            return number;
        }
        else if (op ==='bake'){
            number = number*3;
            console.log(number);
            return number;
        }
        else{
            number = number - number*20/100;
            console.log(number);
            return number;
        }
        

    }


}
cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);