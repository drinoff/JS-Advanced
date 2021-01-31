(function (){
    let sum = 0;
    return function add(x){
        sum += Number(x)
        add.toString = () => sum;

        return add;
    }



})();
