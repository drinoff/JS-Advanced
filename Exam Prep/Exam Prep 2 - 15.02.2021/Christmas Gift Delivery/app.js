function solution() {
    const inputElement = document.getElementsByTagName('input')[0];
    let ulElement = document.querySelector('body > div > section:nth-child(2) > ul');
    const addBtn = document.getElementsByTagName('button')[0];

    const giftListElement = document.querySelector('body > div > section:nth-child(2)');
    const sentListElement = document.querySelector('body > div > section:nth-child(3)')
    const discardedListElement = document.querySelector('body > div > section:nth-child(4)');

    addBtn.addEventListener('click',function(){
        let newLiElement = document.createElement('li');
        newLiElement.classList.add('gift');
        newLiElement.textContent = inputElement.value;


        let sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';

        let discardBtn = document.createElement('button');
        discardBtn.textContent = 'Discard';
        discardBtn.id = 'discardButton';

        newLiElement.appendChild(sendBtn);
        newLiElement.appendChild(discardBtn);
        ulElement.appendChild(newLiElement);
        Array.from(ulElement.children).sort((a,b)=>a.textContent.localeCompare(b.textContent))
            .forEach(x=>ulElement.appendChild(x));
        inputElement.value ='';



    })
    giftListElement.addEventListener('click',function(e){
        if(e.target.textContent === 'Send'){
            let removedElement = e.target.parentElement;

            let string = removedElement.textContent;

            string = string.slice(0,string.length-11)
            removedElement.textContent = string;
            sentListElement.appendChild(removedElement);
            e.target.parentElement.remove()
        }else if(e.target.textContent === 'Discard'){
            let removedElement = e.target.parentElement;

            let string = removedElement.textContent;

            string = string.slice(0,string.length-11)
            removedElement.textContent = string;
            discardedListElement.appendChild(removedElement);
            e.target.parentElement.remove()
        }
    })


}