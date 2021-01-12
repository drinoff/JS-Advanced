function nThElement(input,step){

let arr = [];

for (let i = 0; i < input.length; i++) {
    if(i%step ===0){
        arr.push(input[i]);
    }
    
}
return arr;
}


nThElement(['5', 
'20', 
'31', 
'4', 
'20'], 
'2'
);