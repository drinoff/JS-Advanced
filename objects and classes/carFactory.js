function solve(input){
    let engineType = {
        smallEngine: {'power': 90, 'volume': 1800},
        normalEngine: {'power': 120, 'volume': 2400},
        monsterEngine: {'power': 200, 'volume': 3500}
    }

    let carriageType = {
        hatchback: { type: 'hatchback', color: input.color },
        coupe: { type: 'coupe', color: input.color }

    }

    if(input.power<=90){
        input['engine'] = engineType.smallEngine;
        delete input.power;
    }else if (input.power>90 && input.power<=120){
        input['engine'] = engineType.normalEngine;
        delete input.power;
    }else{
        input['engine'] = engineType.monsterEngine;
        delete input.power;
    }

    if(input.carriage === 'hatchback'){
        delete input.carriage;
        input['carriage'] = carriageType.hatchback;
        delete input.color;
    }else{
        delete input.carriage;
        input['carriage'] = carriageType.coupe;
        delete input.color;

    }
    let wheelSize = input.wheelsize %2 !==0?input.wheelsize : input.wheelsize-1;
    input['wheels'] = [wheelSize, wheelSize, wheelSize, wheelSize]
    delete input.wheelsize;

    return input;

}
//{ model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }

solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
);