function circleArea(argument){
let typeArg = typeof(argument);
if(typeArg === 'number'){
    let result = Math.PI*argument**2;
    console.log(result.toFixed(2));
}else{
    console.log(`We can not calculate the circle area, because we receive a ${typeof(argument)}.`);
}
}
circleArea(2);