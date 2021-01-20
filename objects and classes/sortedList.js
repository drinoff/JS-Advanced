function createSortedList(){
    return{
        nums:[],
        size: 0,
        add(x){
            this.nums.push(x);
            this.nums.sort((a,b)=>a-b);
            this.size+=1;
        },
        remove(index){
            if(index >= 0 && index < this.nums.length) {
                this.nums.splice(index, 1);
                this.size -=1;
            }
        },
        get(index){
            if(index >= 0 && index < this.nums.length) {
                return this.nums[index];
            }
        },




    }



}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
