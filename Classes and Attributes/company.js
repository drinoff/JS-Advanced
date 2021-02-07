class Company{
    departments = [];
    constructor() {

    }
    addEmployee(username,salary,position,department){
        let employee = {
            username: username,
            salary: salary,
            position: position,
            department: department
        }
        this.validate(username,salary,position,department);
        if(this.departments[department]) {
            this.departments[department].push(employee);
        }else{
            this.departments[department]=[];
            this.departments[department].push(employee);
        }
        return `New employee is hired. Name: ${employee.username}. Position: ${employee.position}`
    }

    bestDepartment() {
        let department = '';
        let maxSalary = 0;
        Object.entries(this.departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary;
            })
            salary = salary / value.length;
            if (salary > maxSalary) {
                department = key;
                maxSalary = salary;
            }
        });
        if (department != '') {
            let res = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
            Object.values(this.departments[department]).sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(e => {
                let em = `${e.username} ${e.salary} ${e.position}\n`;
                res += em;
            })
            return res.trim();
        }
    }

    validate(username,salary,position,department){
        if(username === null || username === undefined || username === ''||
            salary === null || salary === undefined || salary === ''||
            position === null || position === undefined || position === ''||
            department === null || department === undefined || department === ''){
            throw new Error('Invalid input!')
        }
        if(salary<=0){
            throw new Error('Invalid input!')
        }
        return true;

    }



}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
