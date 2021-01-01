function deleteByEmail() {
    let inputText = document.getElementsByTagName('input')[0].value;
    let tableElements = document.getElementsByTagName('td');
    
    let isFound = false;
    for (let i = 0; i < tableElements.length; i++) {
        if(tableElements[i].innerHTML === inputText){
            tableElements[i].parentNode.remove();
            isFound = true;
        }
        
    }
    if(isFound){

        document.getElementById('result').innerHTML = 'deleted';
    }else{
        document.getElementById('result').innerHTML = 'Not found.';
    }
    document.getElementsByTagName('input')[0].value = '';
    
    

  
}