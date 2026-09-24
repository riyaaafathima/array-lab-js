class DynamicArray{
    constructor(capacity){
         if (capacity < 0) {
        throw new Error("capacity cannot be negative");
    }
      this.capacity=Math.max(1,capacity);
      this.arraySize=0;
      this.storage= new Array(this.capacity);
      this.minCapacity=capacity;

    }

    size(){
        return this.arraySize
    }
    getCapacity(){
        return this.capacity
    }
    resize(){
        let newStorage=new Array(this.capacity*2)

        for(let i=0;i<this.arraySize;i++){

            newStorage[i]=this.storage[i];
        }

         this.storage=newStorage;
         this.capacity=this.capacity*2
    }
    insert(indx,val){
        if(indx<0 || indx>this.arraySize){
            return "index is not valid"
        }

        if(this.arraySize===this.capacity){
            this.resize()
        }
        for(let i=this.arraySize-1;i>=indx;i--){
            this.storage[i+1]=this.storage[i]
        }
        this.storage[indx]=val
        this.arraySize++
    }

    set(indx,val){
        if(indx<0|| indx>=this.arraySize){
            return "invalid index"
        }
        this.storage[indx]=val;
    }

    get(indx){
        if (indx<0|| indx>=this.arraySize) {
            return "index doesnot exist"
        }
        return this.storage[indx]
    }
    shrink(){
           let newStorage=new Array(this.capacity/2);
           for(let i=0;i<this.arraySize;i++){
            newStorage[i]=this.storage[i]
           }

           this.storage=newStorage;
           this.capacity=this.capacity/2
    }

    remove(indx){
        if(indx<0||indx>=this.arraySize){
            return "index doesnot exist";
        }

        for(let i=indx+1;i<this.arraySize;i++){
            this.storage[i-1]=this.storage[i];
        }
        this.arraySize--;

        this.storage[this.arraySize]=undefined

     if(this.arraySize<=this.capacity/4 && this.capacity/2>=this.minCapacity){
        this.shrink()
        }

    }
}


module.exports=DynamicArray
