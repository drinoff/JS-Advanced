function solve() {
    const buttonElement = document.getElementById('btnSend');

    buttonElement.addEventListener('click',function(){
        const input = document.getElementsByTagName('textarea')[0];
        const bestRestaurantOutput = document.querySelector('#bestRestaurant>p');
        const bestWorkers = document.querySelector('#workers>p');
        const restaurantsInfo = JSON.parse(input.value);
        console.log(restaurantsInfo);
        let restaurants = {};

        restaurantsInfo.forEach((line)=>{
            const tokens = line.split(' - ');
            const name = tokens[0];
            const workersArr = tokens[1].split(', ');
            let avgSalary = 0;
            let bestSalary = 0;

            let workers = [];
            for (const worker of workersArr) {
                let workerTokens = worker.split(' ');
                const salary = Number(workerTokens[1]);
                workers.push({
                    name: workerTokens[0],
                    salary
                })

            }
            if(restaurants[name]){
                workers= workers.concat(restaurants[name].workers)

            }
            workers.sort((a,b)=>b.salary-a.salary);
            bestSalary = workers[0].salary;
            avgSalary = workers.reduce((acc,worker)=>acc+worker.salary,0)/workers.length;

            restaurants[name] = {
                workers,
                avgSalary,
                bestSalary
            }
        })
        let bestRestaurantSalary = 0;
        let bestRestaurant = undefined;

        for (const name in restaurants) {
            if(restaurants[name].avgSalary>=bestRestaurantSalary){
                bestRestaurant = {
                    name,
                    workers: restaurants[name].workers,
                    bestSalary: restaurants[name].bestSalary,
                    avgSalary: restaurants[name].avgSalary
                }
                bestRestaurantSalary = restaurants[name].avgSalary;
            }

        }
        let toAttach = [];
        bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
        bestRestaurant.workers.forEach((worker)=>{
            toAttach.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
        })
        bestWorkers.textContent = toAttach.join(' ');
    })

}
