function validate() {
    function validate() {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+/;
        let inputElement = document.querySelector('#email');

        inputElement.addEventListener('change',function(){

            let result = inputElement.value.match(pattern);
            if(result === null){
                inputElement.style.borderColor = 'red';
                inputElement.className='error';
            }else{
                inputElement.value = '';
                inputElement.removeAttribute('class');
            }
        })

    }
}