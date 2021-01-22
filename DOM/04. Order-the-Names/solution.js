function solve() {
    

    let inputelement = document.getElementsByTagName('input')[0];
    let buttonElement = document.getElementsByTagName('button')[0];
    let orderListElement = document.getElementsByTagName('ol')[0];
    let listElements =orderListElement.getElementsByTagName('li');
    
    buttonElement.addEventListener('click',function(){
        let inputText = inputelement.value;
        let currName = '';
        if(inputText){
            inputText = inputText.toUpperCase();
            currName = inputText[0];
            for (let i = 1; i < inputText.length; i++) {
              currName +=  inputText[i].toLowerCase();
                
            }
            

            let index = inputText.charCodeAt(0) - 65;

            if(listElements[index].textContent.length === 0){
                listElements[index].textContent = currName;
            }else{
                listElements[index].textContent +=', '+ currName;

            }
            inputelement.value = '';

        }



    });
    
    

    
        
    
}