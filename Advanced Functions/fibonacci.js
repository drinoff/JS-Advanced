function getFibonator(){
    let currFib = [1,0];




    function  nextFibonacci(){
        let fib = currFib[currFib.length-1] + currFib[currFib.length-2];
        currFib.push(fib);
        return  fib

    }
    return nextFibonacci;



}
let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());


