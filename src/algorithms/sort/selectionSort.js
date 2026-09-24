const DynamicArray= require("../../dynamicArray.js");


function selectionSort(arr){
    for(let i=0;i<arr.size();i++){
        let min=i;
        let temp=0
        for(let j=i+1;j<arr.size();j++){
             if(arr.get(j)<arr.get(min)){
                min=j;
             }
        }
      temp=arr.get(i);
      arr.set(i,arr.get(min));
      arr.set(min,temp);

    }
    return arr
}

module.exports=selectionSort