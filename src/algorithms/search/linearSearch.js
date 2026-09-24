
const DynamicArray= require("../../dynamicArray")


function linearSearch(arr,target){
    for(let i=0;i<arr.size();i++){
        if(arr.get(i)===target){
            return i
        }
    }
    return -1
}

module.exports=linearSearch