function lockedProfile() {
    const buttons = document.getElementsByTagName('button');

    [...buttons].forEach(button=>{
        button.addEventListener('click',function(ev){

            let lock = ev.target.parentElement.querySelector('input[value="lock"]');

            let hiddenDiv = ev.target.previousElementSibling;

            if(hiddenDiv.style.display === '' && lock.checked === false){
                hiddenDiv.style.display = 'block';
                button.textContent = 'Hide it';

            }else if(hiddenDiv.style.display === 'block' && lock.checked === false){
                hiddenDiv.style.display = '';
                button.textContent = 'Show more';
            }
        })
    })

}