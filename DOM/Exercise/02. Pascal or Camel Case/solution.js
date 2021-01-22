function solve() {
  const inputTextElement = document.querySelector('#text').value.toLowerCase();
  const inputCaseElement = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');

  if(inputCaseElement === 'Pascal Case'){
      let splittedStringElements = inputTextElement.split(' ');
      let destructed = [...rest] = splittedStringElements;
      for (let i = 0; i < destructed.length; i++) {
        destructed[i] = destructed[i][0].toUpperCase() + destructed[i].slice(1);
        
      }
      let result = destructed.join('');
      console.log(result);
      resultElement.textContent = result;
  }else if (inputCaseElement === 'Camel Case'){
    let splittedStringElements = inputTextElement.split(' ');
      let destructed = [...rest] = splittedStringElements;
      destructed[0] = destructed[0][0].toLowerCase() + destructed[0].slice(1);
      for (let i = 1; i < destructed.length; i++) {
        destructed[i] = destructed[i][0].toUpperCase() + destructed[i].slice(1);
        
      }
      let result = destructed.join('');
      console.log(result);
      resultElement.textContent = result;

  }else{
    resultElement.textContent ='Error!'
  }


}