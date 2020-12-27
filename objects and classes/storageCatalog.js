function storageCatalog(input){
let catalogue = {};

for (let i = 0; i < input.length; i++) {
    let finalString = input[i].split(' :');
    let finalString2 = finalString.join(':');
    let currStartsWith = finalString2.charAt(0);
    if(!catalogue.hasOwnProperty(currStartsWith)){
        catalogue[currStartsWith] = [];        
    }
    
    catalogue[currStartsWith].push(finalString2);  
      
}


Object.keys(catalogue).forEach(key=>catalogue[key].sort((x,y)=>x.localeCompare(y)));
Object.keys(catalogue).sort().forEach(key => {
    console.log(`${key}`);
    console.log(`  ${catalogue[key].join('\n  ')}`)
})
}
storageCatalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)