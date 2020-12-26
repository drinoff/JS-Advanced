function gCD(first,second){
    var greatestDiv = 0;
    let startPoint = 0;
    if(first>second){
        startPoint = second;
    }else{
        startPoint = first;
    }
    for (let i = startPoint; i >=1; i--){
        if(first%i===0 && second% i === 0){
            greatestDiv =i;
            console.log(greatestDiv);
            break;
        }
      
    }   
       
    
}
gCD(2154,458);