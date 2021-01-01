function addItem() {
    let newInputElemenet = document.getElementById('newText');
    let itemText = newInputElemenet.value;
    let ulElement = document.getElementById('items');
    let newLiElement = document.createElement('li');
    newLiElement.innerHTML =` ${itemText} +       <a href="#">[Delete]</a> `;
    ulElement.appendChild(newLiElement);
    newInputElemenet.value = '';
     
    
    ulElement.addEventListener('click', function(e){

        let currentPressedElement = e.target.parentNode;
        currentPressedElement.remove();
    });

    
    
    

    
}