function solve(...input){
let types = new Map;

let collection = Array.from(input)
    collection.forEach(x=> {
        types.has(typeof x)?types.set(typeof x, types.get(typeof x)+1):types.set(typeof x,1);
        console.log(`${typeof x}: ${x}`)

    })

    for (let [key, value] of [...types].sort((a,b)=>b[1]-a[1])) {
        console.log(`${key} = ${value}`)
    }

}
solve({ name: 'bob'}, 3.333, 9.999);