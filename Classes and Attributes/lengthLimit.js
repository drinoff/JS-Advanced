class Stringer{
    constructor(innerString,innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(length){
        this.innerLength +=length;

    }
    decrease(length){
        this.innerLength -=length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    toString(){
        if(this.innerString.length<=this.innerLength) {
            return this.innerString;
        }else if(this.innerLength === 0){
            return '...'
        }else{
            return this.innerString.substr(0,this.innerString.length-this.innerLength)+ '...';
        }
    }
}

let s = new Stringer("Viktor", 6);
s.decrease(9);
console.log(s.toString())
