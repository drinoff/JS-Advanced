(function() {
    String.prototype.ensureStart = function(str){
        if(!this.startsWith(str)){
            return str + this;
        }
        return this;
    }

    String.prototype.ensureEnd = function(str){
        if(!this.endsWith(str)){
            return this + str;
        }
    }

    String.prototype.isEmpty = function(){
        return this.length === 0;
    }

    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex != -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    }

    String.format = function (string, ...params) {
        for(let i=0; i<params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index != -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');


str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
console.log();
//str = String.format('The {0} {1} fox',
    //'quick', 'brown');
//str = String.format('jumps {0} {1}',
    //'dog');
