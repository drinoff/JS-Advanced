function input(array){



    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        
    }
    


    let inversedResult = 0;
    for (let i = 0; i < array.length; i++) {
        inversedResult += 1/array[i];
        
    }
    

    console.log(result);
    console.log(inversedResult);
   
    console.log(array.join(''));


}
input([1,2,3]);