function create(words) {
   const contentElement = document.getElementById('content');
   for (let i = 0; i < words.length; i++) {
      const divElemenet = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = words[i];
      divElemenet.appendChild(pElement);
      contentElement.appendChild(divElemenet);
   }
   contentElement.addEventListener('click',function(ev){
      ev.target.children[0].style.display='inline';
   })
}