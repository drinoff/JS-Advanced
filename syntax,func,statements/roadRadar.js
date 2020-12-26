function speeding(speed,area){
       
    switch (area) {
        case 'motorway':
            if(speed - 130 > 0 && speed - 130 < 21){
            console.log('speeding');
            }else if(speed - 130 > 21 && speed - 130 < 41){
                console.log('excessive speeding');
            }else{
                if(speed - 130>0){
                    console.log('reckless driving');
                    }
            }
            break;

            case 'interstate':
            if(speed - 90 > 0 && speed - 90 < 21){
            console.log('speeding');
            }else if(speed - 90 > 21 && speed - 90 < 41){
                console.log('excessive speeding');
            }else{
                if(speed - 90>0){
                    console.log('reckless driving');
                    }
            }
            break;

            case 'city':
            if(speed - 50 > 0 && speed - 50 < 21){
            console.log('speeding');
            }else if(speed - 50 > 21 && speed - 50 < 41){
                console.log('excessive speeding');
            }else{
                if(speed - 50>0){
                console.log('reckless driving');
                }
            }
            break;

            case 'residential':
            if(speed - 20 > 0 && speed - 20 < 21){
            console.log('speeding');
            }else if(speed - 20 > 21 && speed - 20 < 41){
                console.log('excessive speeding');
            }else{
                if(speed - 20>0){
                    console.log('reckless driving');
                    }
            }
            break;
    
    }
}

speeding(21,'residential');
