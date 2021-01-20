function solve(input){


    const arrToStringify =[];
    for (let i = 1; i < input.length; i++) {
        const [,town,lat,long] = input[i].split('|').map(x=>x.trim());
        const currObj = {Town:town,Latitude:Number(Number(lat).toFixed(2)),Longitude:Number(Number(long).toFixed(2))};
        arrToStringify.push(currObj);
    }
return JSON.stringify(arrToStringify)
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);