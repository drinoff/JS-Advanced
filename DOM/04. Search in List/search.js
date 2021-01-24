function search() {
   const searchText = document.getElementById('searchText').value;
   const townElements = document.getElementById('towns').children;
   const resultElement = document.getElementById('result');

   let townsArray = Array.from(townElements).map(x=>x.innerHTML);
   console.log(searchText);
   const foundTowns = townsArray.filter(x=>x.match(searchText));
   for (let i = 0; i < foundTowns.length; i++) {


      for (let j = 0;j<townElements.length;j++) {
         if (townElements[j].textContent === foundTowns[i]){
            townElements[j].style.fontWeight = 'bold';
            townElements[j].style.textDecoration = 'underline';
         }
             }
   }
   resultElement.textContent = `${foundTowns.length} matches found`

}
