function squireOfStars(arg = 5){
if(arg === 1){
console.log('*');
}else{
    let arr = [];
    for (let i = 0; i < arg; i++) {
        
        arr.push('*');
        
    }
    for (let y = 0; y < arg; y++) {
        console.log(arr.join(' '));
        
    }
}
}
squireOfStars(2);