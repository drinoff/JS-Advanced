function nThElement(input){

let step = input.pop();

for (let i = 0; i < input.length; i++) {
    if(i%step ===0){
        console.log(input[i]);
    }
    
}

}


nThElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);