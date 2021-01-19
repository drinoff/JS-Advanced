function autoEngineeringCompany(input){

let catalog = [];
for (let i = 0; i < input.length; i++) {
    
    let carInfo = input[i].split(' | ');
    let brand = carInfo[0];
    let model = carInfo[1];
    let quantity = Number(carInfo[2]);
}


}
autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)