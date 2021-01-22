function toggle() {
    let buttonElement = document.querySelector('span.button');
    let divElementExtraId = document.getElementById('extra');
    if(buttonElement.textContent == 'More'){
        divElementExtraId.style.display = 'block'; 
        buttonElement.textContent = 'Less';
    }else{
        divElementExtraId.style.display = 'none';
        buttonElement.textContent = 'More';
    }
    
}