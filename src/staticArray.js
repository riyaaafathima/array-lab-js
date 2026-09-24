     class StaticArray{
    constructor(capacity){
        this.capacity=capacity;
        this.arraySize=0;
        this.storage=new Array(this.capacity);

    }
    size(){
   return this.arraySize       

    }
    getCapacity(){
        return this.capacity
    }
    set(indx,val){
        if (indx<0 || indx>=this.arraySize) {
            return "invalid index";

        }

        this.storage[indx]=val

    
    }
    get(indx){
        if (indx<0||indx>=this.capacity) {
            return "indx doesnot exist"
        }
        return this.storage[indx]
    }
    insert(indx,val){
        if (indx<0 ||indx>this.arraySize){
                  return "index is not valid"
        } 
        if(this.arraySize===this.capacity){
               return "arr is full"
        }
        for(let i=this.arraySize-1;i>=indx;i--){

            this.storage[i+1]=this.storage[i]
            }
            this.storage[indx]=val;
            this.arraySize++
        }
        remove(indx){
            if(indx<0||indx>=this.arraySize){
                return "invalid index"
            }
            for(let i=indx+1;i<this.arraySize;i++){
                   this.storage[i-1]=this.storage[i];
                }
                this.arraySize--
                this.storage[this.arraySize] = undefined
        }
    }




module.exports=StaticArray;      