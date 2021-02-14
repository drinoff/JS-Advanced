function solve() {
    let lectureInfo = document.querySelectorAll('.form-control input')
    let name = lectureInfo[0]
    let date = lectureInfo[1]

    let module = document.querySelector('select')


    let addBtn = document.getElementsByTagName('button')[0];
    let modulesElement = document.getElementsByClassName('modules')[0];

    addBtn.addEventListener('click',function(e){

        e.preventDefault();
        console.log(name.value)
        console.log(date.value)
        console.log(module.value)




        if(name.value === ''||date.value === ''|| date.value ==='dd/mm/yyyy --:--'||module.value ==='Select module...'||module.value === ''){

        }else{
            let newDivElement = document.createElement('div');
            newDivElement.innerHTML = `<div class = 'module'>` + '\n'
                                       + `<h3>${module.value} Module</h3>` + '\n'
                                       + `<ul>`+ '\n'
                                        +`<li class = "flex">`+ '\n'
                                        +`<h4>${name.value} - ${date.value}`+ '\n'
                                        + `<button class = 'red'>Del</button>` + '\n'
                                        + `</li>`+ '\n'
                                        + `</ul>`
                                        + `</div>`
            console.log(newDivElement);
            modulesElement.appendChild(newDivElement);


        }
    })

}