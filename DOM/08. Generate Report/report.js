function generateReport(colNames) {
    const checks = document.querySelectorAll('input[type="checkbox"]');
    const data = [...document.querySelectorAll('tbody>tr')].map(r => [...r.children].reduce((acc, col, i) => Object.assign(acc, checks[i].checked ? {[checks[i].name]: col.textContent} : {}), {}));

    document.getElementById('output').value = JSON.stringify(data, null, 2);
}