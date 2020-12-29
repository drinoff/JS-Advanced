function solve() {
   let msgElement = document.getElementById('chat_input');
   let button = document.getElementById('send');
   let chatMessegesElemenet = document.getElementById('chat_messages');
   
   button.addEventListener('click', function(){
      let clonedDivElemenet = document.getElementsByClassName('my-message')[0].cloneNode();  
      let msg = msgElement.value;     
      clonedDivElemenet.textContent = msg;
      chatMessegesElemenet.appendChild(clonedDivElemenet);
      msgElement.value = '';
   });
  
}


