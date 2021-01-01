function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient-box');
    let resultElement = document.getElementById('result');

    gradientBoxElement.addEventListener('mousemove', function(e){
        let result = e.offsetX/(e.target.clientWidth - 1);
        resultElement.innerHTML = Math.trunc(result*100) + '%';

    })
    gradientBoxElement.addEventListener('mouseOut', function(e){
        
        resultElement.innerHTML = '';

    })
}