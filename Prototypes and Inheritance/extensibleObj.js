function  solve (){
let myObj = {
    extend: function (template){
        for (const templateKey of Object.keys(template)) {
            if(typeof template[templateKey] == "function"){
                Object.getPrototypeOf(myObj)[templateKey] = template[templateKey];
            }else {
                myObj[templateKey] = template[templateKey];
            }
        }
    }
}
return myObj;
}


