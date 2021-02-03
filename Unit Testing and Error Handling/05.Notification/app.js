function notify(message) {
    let notifyMsgElement = document.getElementById('notification');
    notifyMsgElement.textContent = message;
    notifyMsgElement.style.display = 'block';
    notifyMsgElement.addEventListener('click',()=>{
        notifyMsgElement.style.display='none';
    })
  }