function rotateArr(input,rotation){
let count = rotation%input.length;

for (let i = 0; i < count; i++) {
    let element = input.pop();
    input.unshift(element);
    
}
console.log(input.join(' '));

}
rotateArr(['1', 
'2', 
'3', 
'4'], 
2
);