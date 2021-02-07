function capyJuice(input){

    let juice = {};
    let juiceBottles = {};

    for (let i = 0; i < input.length; i++) {
        let juiceInfo = input[i].split(' => ');
        let currJuice = juiceInfo[0];
        let CurrQuantity = Number(juiceInfo[1]);
        if(!juice.hasOwnProperty(currJuice)){
            juice[currJuice] = CurrQuantity;
        }else{
            juice[currJuice] += CurrQuantity;
        }
        if(juice[currJuice]>=1000){
            if(!juiceBottles.hasOwnProperty(currJuice)){
                juiceBottles[currJuice] = 0;
            }
        }
    }
    Object.keys(juiceBottles).forEach(key=>juiceBottles[key] = Math.floor(juice[key]/1000));
    Object.keys(juiceBottles).forEach((key,value)=>console.log(`${key} => ${juiceBottles[key]}`));


}