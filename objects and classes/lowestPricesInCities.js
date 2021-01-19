function solve(input){
    let townsObj = {};
    for (const element of input) {
        let currentData = element.split(' | ');
        const [town,product,currprice] = currentData;
        if(!townsObj.hasOwnProperty(product)){
            townsObj[product] = [Number(currprice),town];
        }else{
            if(townsObj[product][1] === town){
                townsObj[product][0] = currprice;
            }
            if (townsObj[product][0] >= Number(currprice)){
                townsObj[product][0] = currprice;
                townsObj[product][1] = town;
            }
        }

    }


    let info = Object.entries(townsObj);
    for (let i = 0; i < info.length; i++) {
        console.log(`${info[i][0]} -> ${info[i][1][0]} (${info[i][1][1]})`)
    }



}
solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
);