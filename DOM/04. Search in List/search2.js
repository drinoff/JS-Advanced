function search() {
    let count = 0;
    let text = document.getElementById('searchText').value;
    let list = document.querySelectorAll('#towns li');


    for(let word of list){
        if((word.textContent).toLowerCase().includes(text.toLowerCase())){
            word.style.fontWeight = 'bold';
            word.style.textDecoration = 'underline'
            count++;
        } else {
            word.style.fontWeight = '';
            word.style.textDecoration = '';
        }
    }

    document.getElementById('result').textContent = `${count} matches found]`
}