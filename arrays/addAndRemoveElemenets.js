function addAndRemove(input){
let arr = [];
let element = 1;

for (let i = 0; i < input.length; i++) {
    
    if(input[i]==='add'){
        arr.push(element);
    }else{
        arr.pop();
    }
    element++;
}
if(arr.length===0){
    console.log('Empty')
}else{
    arr.forEach(x=>console.log(x));
}


}
addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);