function speeding(speed,area){
       
    switch (area) {
        case 'motorway':
            if(speed - 130 > 0 && speed - 130 < 21){
            console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`);
            }else if(speed - 130 > 21 && speed - 130 < 41){
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`);
            }else if(speed - 130>0){
                console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless driving`);
            }else{
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }
                
            
            break;

        case 'interstate':
            if(speed - 90 > 0 && speed - 90 < 21){
            console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`);
            }else if(speed - 90 > 21 && speed - 90 < 41){
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`);
            }else if(speed - 90>0){
                console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless driving`);
            }else{
                console.log(`Driving ${speed} km/h in a 90 zone`);
            }
            
            break;

        case 'city':
            if(speed - 50 > 0 && speed - 50 < 21){
            console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`);
            }else if(speed - 50 > 21 && speed - 50 < 41){
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`);
            }else if(speed - 50>0){
                console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless driving`);
                
            }else{
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }
            break;

        case 'residential':
            if(speed - 20 > 0 && speed - 20 < 21){
            console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`);
            }else if(speed - 20 > 21 && speed - 20 < 41){
                console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`);
            }else if(speed - 20>0){
                    console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless driving`);
                    
            }else{
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }
            break;
    
    }
}

speeding(0, 'motorway');
