function heroicInventory(input){
let finalArr = [];
let result;
for (let i = 0; i < input.length; i++) {
    let heroInfo = input[i].split(' / ');
    
    //console.log(heroInfo);
    let currHero = {};
    currHero.name = heroInfo[0].trim();
    currHero.level = Number(heroInfo[1].trim()); 
    if(heroInfo.length>2)  {
    let itemsInfo = heroInfo[2].split(', ');
    currHero.items = itemsInfo;
    }else{
        currHero.items = [];
    }
    //console.log(currHero);
    finalArr.push(currHero);
    //console.log(finalArr);
    result = JSON.stringify(finalArr);
    
}
console.log(result);

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)