function subtract() {
    let firstNumberElement = document.getElementById('firstNumber').value;
    let firstNumber = Number(firstNumberElement);
    let secondNumberElement = document.getElementById('secondNumber').value;
    let secondNumber = Number(secondNumberElement);

    

    let result = firstNumber - secondNumber;
    document.getElementById('result').innerHTML = result;
    
    
}