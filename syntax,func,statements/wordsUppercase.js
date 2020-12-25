function input(string){
    let result = string
                 .toUpperCase()
                 .match(/\w+/g);
 
    console.log(result.join(', '));
}
input('Hey, how are you?')