function delimiter(input){

let delimiter = input.pop();
let array = input.join(`${delimiter}`);

    
console.log(array);

}

delimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)