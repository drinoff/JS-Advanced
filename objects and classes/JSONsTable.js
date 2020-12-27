function jSonsTable(input){
let html= '';
html+='<table>'+ '\n';
        
    for (let i = 0; i < input.length; i++) {
        let data = JSON.parse(input[i]);
        //console.log(data);  

        html += '   <tr>' + '\n';
        let values = Object.values(data)
        for (let i = 0; i < values.length; i++) {
            html+=`         <td>${values[i]}</td>\n`;
            
        }
        

        html += '   </tr>\n';
        
    }
    
        html+='</table>';
    console.log(html);
    

}
jSonsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)