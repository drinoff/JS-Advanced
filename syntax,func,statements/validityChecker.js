function validity(input){
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

let firstIsInteger = Number.isInteger(Math.sqrt((0-x1)**2+(0-y1)**2));
let secondIsInteger = Number.isInteger(Math.sqrt((0-x2)**2+(0-y2)**2));
let thirdIsInteger = Number.isInteger(Math.sqrt((x2-x1)**2+(y2-y1)**2));

if(firstIsInteger){
console.log(`{${x1}, ${y1}} to ${'{0, 0}'} is valid` );
}else{
console.log(`{${x1}, ${y1}} to ${'{0, 0}'} is invalid`);
}

if(secondIsInteger){
    console.log(`{${x2}, ${y2}} to ${'{0, 0}'} is valid` );
}else{
console.log(`{${x2}, ${y2}} to ${'{0, 0}'} is invalid`);
}

if(thirdIsInteger){
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid` );
    }else{
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validity([3, 0, 0, 4]);