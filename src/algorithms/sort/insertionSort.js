const DynamicArray= require("../../dynamicArray.js")

function insertionSort(arr){
    for(let i=1;i<arr.size();i++){
        let key=arr.get(i);
       let j=i-1;

       while(j>=0&& arr.get(j)>key){
        arr.set(j+1,arr.get(j));
        j--
       }
       arr.set(j+1,key)
    }
    return arr
}

module.exports=insertionSort