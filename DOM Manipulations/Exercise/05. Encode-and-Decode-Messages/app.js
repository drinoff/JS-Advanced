function encodeAndDecodeMessages() {
    let [encodeButton,decodeButton] = document.getElementsByTagName('button');
    let [encodeText,decodeText] = document.getElementsByTagName('textarea');


    let msg = [];
    encodeButton.addEventListener('click',function(){

        msg = Array.from(encodeText.value).map(x => String.fromCharCode(x.charCodeAt(0) + 1))
        decodeText.value = msg.join('');
        encodeText.value ='';

    })
    decodeButton.addEventListener('click',function(){


        decodeText.value = msg.map(x=>String.fromCharCode(x.charCodeAt(0)-1)).join('');



    })

}