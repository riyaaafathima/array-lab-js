
const DynamicArray=require("../../dynamicArray");

function binarySearch(arr,target){
let left=0;
let right=arr.size()-1;

while(left<=right){
    let middle=Math.floor((left+right)/2)
    let midVal=arr.get(middle)
    if(target===midVal){
        return middle
    }
    if(target>midVal){
        left=middle+1;
    }
    if(target<midVal){
        right=middle-1
    }
}
return -1
}

module.exports=binarySearch