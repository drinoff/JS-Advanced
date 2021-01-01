function addItem() {
    let newInputElemenet = document.getElementById('newItemText');
    let itemText = newInputElemenet.value;
    let ulElement = document.getElementById('items');
    let newLiElement = document.createElement('li');
    newLiElement.innerHTML = itemText;
    ulElement.appendChild(newLiElement);
    newInputElemenet.value = '';

}