function addItem() {
    let firstTextElement = document.getElementById('newItemText').value;
    let secondTextElement = document.getElementById('newItemValue').value;
    let optionElement = document.createElement('option');
    optionElement.innerHTML = firstTextElement;
    optionElement.value = secondTextElement;
    document.getElementById('menu').appendChild(optionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
    
}