function tickets (...input){
    let ticketsArray = [];
    class Ticket  {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;

        }

    }

    let tickets = input[0];
    let sortingCriteria = input[1];
    for (let i = 0; i < tickets.length; i++) {
        [destination,price,status]=tickets[i].split('|');
        let ticket = new Ticket(destination,price,status);
        ticketsArray.push(ticket);

    }
    if(sortingCriteria==='price') {
        return ticketsArray.sort((a, b) => [sortingCriteria] - b[sortingCriteria]);
    }else{
        return ticketsArray.sort((a, b) => (a[sortingCriteria].localeCompare(b[sortingCriteria])));
    }
}


tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
)