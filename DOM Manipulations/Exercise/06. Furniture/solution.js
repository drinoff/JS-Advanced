function solve() {

  let input = document.getElementsByTagName('textarea')[0];
  let output = document.getElementsByTagName('textarea')[1];

  let [generateBtn,buyBtn] = document.getElementsByTagName('button');

  let trElement = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener('click',function(){



      JSON.parse(input.value).forEach(prop=>{
          trElement.innerHTML += `<td> <img src=${prop['img']}> </td>
                                  <td><p>${prop['name']}</p>
                                  <td><p>${Number(prop['price'])}</p></td>
                                  <td><p>${Number(prop['decFactor'])}</p></td>
                                  <td><input type="checkbox" /></td>`;

      })

  })

    buyBtn.addEventListener('click',function(){
        let tBody = document.querySelectorAll('tbody')[0];

        let checkedArr = Array.from(tBody.children);

        let  result = checkedArr.filter(row => row.querySelector('input:checked'))
           output.value ='Bought furniture: ' + result
               .map(x=>x.getElementsByTagName('p')[0].textContent).join(', ');
           output.value += '\nTotal price: ' + (result
               .reduce((acc,x)=> acc+ +x.getElementsByTagName('p')[1].textContent,0))
               .toFixed(2);
           output.value += '\nAverage decoration factor: ' + result
               .reduce((acc,x)=>acc+ +x.getElementsByTagName('p')[2].textContent,0)/result.length;



    })

}