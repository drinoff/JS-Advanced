function rectangle(x,y,rectColor){
    const colorCapitalized = rectColor.charAt(0).toUpperCase() + rectColor.slice(1)
    return {
        width: x,
        height: y,
        color: colorCapitalized,
        calcArea() {
            return  this.width * this.height;
        }
    };

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
