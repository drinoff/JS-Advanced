class Parking{



    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel,carNumber){
        if(this.capacity===0){
            throw new Error("Not enough parking space.");
        }
        this.vehicles.push({carModel,carNumber,payed: false});
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber){
        let leavingCar = this.vehicles.find(x=>x.carNumber === carNumber);
        if(leavingCar === undefined){
            throw new Error("The car, you're looking for, is not found.");
        }
        if(leavingCar.payed === false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles = this.vehicles.filter(x=>x.carNumber !== carNumber);
        this.capacity++;
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber){
        let payingCar = this.vehicles.find(x=>x.carNumber === carNumber);
        if(!payingCar){
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if(payingCar.payed){
            throw new Error(`${payingCar.carNumber}'s driver has already payed his ticket.`);
        }
        payingCar.payed = true;
        return `${payingCar.carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber){
        if(!carNumber){
            let returnedString = '';
            returnedString += `The Parking Lot has ${ this.capacity} empty spots left.`;
            for (const car of this.vehicles.sort((a,b)=>a.carModel.localeCompare(b.carModel))) {
                let status = '';
                if(car.payed === true){
                    status = 'Has payed'
                }else{
                    status = 'Not payed'
                }
                returnedString += '\n' + `${car.carModel} == ${car.carNumber} - ${status}`;
            }
            return returnedString;
        }else{
            let statisticCar = this.vehicles.find(x=>x.carNumber === carNumber);
            let status = '';
            if(statisticCar.payed === true){
                status = 'Has payed'
            }else{
                status = 'Not payed'
            }
            return `${statisticCar.carModel} == ${statisticCar.carNumber} - ${status}`
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("alfa t600", "TX3691CA"));
console.log(parking.addCar("aab AMG", "KK4444CA"));
console.log(parking.addCar("aba 320D", "MM5555CA"));

console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));


console.log(parking.removeCar("TX3691CA"));
