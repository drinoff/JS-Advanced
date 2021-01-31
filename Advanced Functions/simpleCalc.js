function result(){
    let select1 = 0;
    let select2 = 0;
    let resultSelect = 0;

    return {

        init(selector1,selector2,resultSelector){
             select1 = document.querySelector(selector1);
             select2 = document.querySelector(selector2);
             resultSelect = document.querySelector(resultSelector);
        },
        add(){
            resultSelect.value = Number(select1.value)+Number(select2.value);
            return resultSelect;
        },
        subtract(){
            resultSelect.value = Number(select1.value)-Number(select2.value);
            return resultSelect;
        }

    }
}