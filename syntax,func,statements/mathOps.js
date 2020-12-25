function solve(first,second,third){
    let result;
switch (third) {
    case '+':
        result = first + second;
        console.log(result);
        break;

    case '-':
        result = first - second;
        console.log(result);
        break;

    case '*':
        result = first * second;
        console.log(result);
        break;

    case '/':
        result = first / second;
        console.log(result);
        break;

    case '%':
        result = first % second;
        console.log(result);
        break;

    case '**':
        result = first ** second;
        console.log(result);
        break;        
}
}

solve(5, 6, '+');