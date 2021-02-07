class Hex{
    constructor(value){
        this.value = value;
    }
    valueOf(){
        return this.value;
    }
    toString(){
        return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(number){
        let result = (this.value + Number(number.valueOf()));
        return new Hex(result);
    }

    minus(number) {
        let result = (this.value - Number(number.valueOf()));
        return new Hex(result);
    }
    parse(string){

        return parseInt(string,16);
    }
}
let FF = new Hex(255);

