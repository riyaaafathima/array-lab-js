const test=require("node:test");
const assert=require("node:assert");
const DynamicArray= require("../src/dynamicArray");
const linearSearch=require("../src/algorithms/search/linearSearch");

test("target exist at the beginning",()=>{
    const arr= new DynamicArray(5);
    arr.insert(0,10)
    arr.insert(1,20)
    arr.insert(2,30)
    arr.insert(3,40)

    assert.equal(linearSearch(arr,10),0)
})



test("target exist in the middle",()=>{
    const arr= new DynamicArray(6);
  
    arr.insert(0,10)
    arr.insert(1,20)
    arr.insert(2,30)
    arr.insert(3,40)
    arr.insert(4,50)

    assert.equal(linearSearch(arr,30),2)

})
test("target exist at last",()=>{
    const arr= new DynamicArray(6);
  
    arr.insert(0,10)
    arr.insert(1,20)
    arr.insert(2,30)
    arr.insert(3,40)
    arr.insert(4,50)

    assert.equal(linearSearch(arr,50),4)

})
test("target doesnot exist",()=>{
    const arr= new DynamicArray(6);
  
    arr.insert(0,10)
    arr.insert(1,20)
    arr.insert(2,30)
    arr.insert(3,40)
    arr.insert(4,50)

    assert.equal(linearSearch(arr,99),-1)

})
test("search in an empty array",()=>{
    const arr= new DynamicArray(6);
  
    assert.equal(linearSearch(arr,99),-1)

})