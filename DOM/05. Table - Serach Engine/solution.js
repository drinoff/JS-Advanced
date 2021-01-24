function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchText = document.getElementById('searchField');
      const tablePersonsElements = document.querySelectorAll('tbody td');
      for (let i = 0; i < tablePersonsElements.length; i++) {
         if(tablePersonsElements[i].parentElement.className === 'select'){
            tablePersonsElements[i].parentElement.className = '';
         }
      }
      for (let i = 0; i < tablePersonsElements.length; i++) {
         if(tablePersonsElements[i].textContent.includes(searchText.value)){
            tablePersonsElements[i].parentElement.className = 'select';
            console.log(tablePersonsElements[i]);
         }
      }
      searchText.value = '';



   }
}