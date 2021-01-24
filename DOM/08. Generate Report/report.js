function generateReport(colNames) {
    const checks = document.querySelectorAll('input[type="checkbox"]');
    const checked = Array.from(checks).filter(x=>x.checked);
    const checkedNames = checked.map(x=>x.name)
    //const data = [...document.querySelectorAll('tbody>tr')].map(r => [...r.children].reduce((acc, col, i) => Object.assign(acc, checks[i].checked ? {[checks[i].name]: col.textContent} : {}), {}));

    //document.getElementById('output').value = JSON.stringify(data, null, 2);


    const data = Array.from(document.querySelectorAll('tbody>tr'));
    const dataInfo = data.map(x=>x.textContent);
    const arr = [];





}