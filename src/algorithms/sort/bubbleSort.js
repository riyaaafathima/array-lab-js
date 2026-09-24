const DynamicArray=require("../../dynamicArray");


function bubbleSort(arr){
    let temp=0
    for(let i=0;i<arr.size();i++){
        for(let j=0;j<arr.size()-i-1;j++){

            if(arr.get(j)>arr.get(j+1)){

                temp=arr.get(j)
                arr.set(j,arr.get(j+1));
                arr.set(j+1,temp)
            }
        }
    }
    return arr
}


module.exports=bubbleSort   