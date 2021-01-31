function solve(input,strCommand){

    function sort(){
        if(strCommand==='asc'){
            return input.sort((a,b)=>a-b);
        }else{
            return input.sort((a,b)=>b-a);
        }
    }
return sort();

}
solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');