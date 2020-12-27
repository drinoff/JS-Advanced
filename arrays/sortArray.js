function sort(input){


    let sorted = input.sort((cur,next)=>cur.length - next.length || cur.localeCompare(next));
    sorted.forEach(element => {
        console.log(element)
    });
}
sort(['test', 
'Deny', 
'omen', 
'Default']


)