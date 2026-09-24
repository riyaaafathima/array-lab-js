const test= require("node:test");
const assert=require("node:assert")
const StaticArray = require("../src/staticArray.js");

// test() describe what we are testing
// assert()checks wheather reality matches expectation 


// =======================================================
// TEST 1: REMOVE LAST ELEMENT

// REMOVE(beginning) → O(n)
// REMOVE(middle)    → O(n)
// REMOVE(end)       → O(1)
// =======================================================


test("remove the last element", () => {

    // Arrange
    const arr1 = new StaticArray(5);

    arr1.insert(0, 10);
    arr1.insert(1, 20);
    arr1.insert(2, 30);
    arr1.insert(3, 40);
    arr1.insert(4, 50);

    // Act
    arr1.remove(4);

    // Assert
    assert.equal(arr1.get(0), 10);
    assert.equal(arr1.get(1), 20);
    assert.equal(arr1.get(2), 30);
    assert.equal(arr1.get(3), 40);
    assert.equal(arr1.size(), 4);
});


// =======================================================
// TEST 2: REMOVE FIRST ELEMENT
// =======================================================


test("remove the first element",()=>{
// arrange

const arr2 = new StaticArray(5);

arr2.insert(0, 10);
arr2.insert(1, 20);
arr2.insert(2, 30);
arr2.insert(3, 40);
arr2.insert(4, 50);

// act
arr2.remove(0);

//assert

assert.equal(arr2.get(0),20)
assert.equal(arr2.get(1),30)
assert.equal(arr2.get(2),40)
assert.equal(arr2.get(3),50)
assert.equal(arr2.size(),4)

})



// =======================================================
// TEST 3: REMOVE ELEMENT FROM MIDDLE
// =======================================================



test("remove an element from the middle",()=>{

    // arrange
    const arr3=new StaticArray(5);
   arr3.insert(0, 10);
    arr3.insert(1, 20);
    arr3.insert(2, 30);
    arr3.insert(2, 40);
      
    // act 

    arr3.remove(1)

    // assert
 assert.equal(arr3.get(0), 10);
assert.equal(arr3.get(1), 40);
assert.equal(arr3.get(2), 30);
assert.equal(arr3.size(), 3);
})


// =======================================================
// TEST 4: INSERT AT THE BEGINNING
// =======================================================

// INSERT(beginning) → O(n)
// INSERT(middle)    → O(n)
// INSERT(end)       → O(1)



test("insert at the beginning",()=>{

    // arrange

const arr4 = new StaticArray(10);

arr4.insert(0, 10);
arr4.insert(1, 20);
arr4.insert(2, 30);
arr4.insert(3, 40);


//act

arr4.insert(0, 90);

// assert
assert.equal(arr4.get(0),90)
assert.equal(arr4.get(1),10)
assert.equal(arr4.get(2),20)
assert.equal(arr4.get(3),30)
assert.equal(arr4.get(4),40)
assert.equal(arr4.size(),5)
})


// =======================================================
// TEST 5: INSERT IN THE MIDDLE
// =======================================================

test("insert in the middle", () => {

    // Arrange
    const arr5 = new StaticArray(10);

    arr5.insert(0, 10);
    arr5.insert(1, 20);
    arr5.insert(2, 30);
    arr5.insert(3, 40);

    // Act
    arr5.insert(2, 100);

    // Assert
    assert.equal(arr5.get(0), 10);
    assert.equal(arr5.get(1), 20);
    assert.equal(arr5.get(2), 100);
    assert.equal(arr5.get(3), 30);
    assert.equal(arr5.get(4), 40);
    assert.equal(arr5.size(), 5);
});


// =======================================================
// TEST 6: INSERT AT THE END
// =======================================================

test("insert at the end", () => {

    // Arrange
    const arr6 = new StaticArray(10);

    arr6.insert(0, 10);
    arr6.insert(1, 20);
    arr6.insert(2, 30);
    arr6.insert(3, 40);

    // Act
    arr6.insert(4, 100);

    // Assert
    assert.equal(arr6.get(0), 10);
    assert.equal(arr6.get(1), 20);
    assert.equal(arr6.get(2), 30);
    assert.equal(arr6.get(3), 40);
    assert.equal(arr6.get(4), 100);
    assert.equal(arr6.size(), 5);
});


// =======================================================
// TEST 7: INVALID INDEXES
// =======================================================

test("reject invalid indexes", () => {

    // Arrange
    const arr7 = new StaticArray(10);

    arr7.insert(0, 10);

    // Act + Assert
    assert.equal(arr7.set(-1, 20), "invalid index");
    assert.equal(arr7.set(10, 20), "invalid index");

    assert.equal(arr7.get(-1), "indx doesnot exist");
    assert.equal(arr7.get(10), "indx doesnot exist");

    assert.equal(arr7.insert(-1, 20), "index is not valid");
    assert.equal(arr7.insert(2, 20), "index is not valid");

    assert.equal(arr7.remove(-1), "invalid index");
    assert.equal(arr7.remove(10), "invalid index");

    // Make sure the array was not changed
    assert.equal(arr7.get(0), 10);
    assert.equal(arr7.size(), 1);
});


// =======================================================
// TEST 8: FULL ARRAY
// =======================================================

test("does not insert into a full array", () => {

    // Arrange
    const arr8 = new StaticArray(3);

    arr8.insert(0, 1);
    arr8.insert(1, 2);
    arr8.insert(2, 3);

    // Act
    const result = arr8.insert(2, 60);

    // Assert
    assert.equal(result, "arr is full");

    assert.equal(arr8.get(0), 1);
    assert.equal(arr8.get(1), 2);
    assert.equal(arr8.get(2), 3);
    assert.equal(arr8.size(), 3);
});


// ====================================================
// TEST 9: SET / UPDATE
// ====================================================

test("updates an existing element", () => {

    // Arrange
    const arr9 = new StaticArray(5);

    arr9.insert(0, 10);
    arr9.insert(1, 20);
    arr9.insert(2, 30);

    // Act
    arr9.set(1, 99);

    // Assert
    assert.equal(arr9.get(0), 10);
    assert.equal(arr9.get(1), 99);
    assert.equal(arr9.get(2), 30);

    // set() should not change the size
    assert.equal(arr9.size(), 3);
});


test("handles zero capacity", () => {
    const arr = new StaticArray(0);

    assert.equal(arr.size(), 0);
    assert.equal(arr.getCapacity(), 0);

    assert.equal(arr.insert(0, 10), "arr is full");
    assert.equal(arr.size(), 0);
});


test("handles capacity 1", () => {
    const arr = new StaticArray(1);

    arr.insert(0, 10);

    assert.equal(arr.size(), 1);
    assert.equal(arr.getCapacity(), 1);
    assert.equal(arr.get(0), 10);

    assert.equal(arr.insert(1, 20), "arr is full");
    assert.equal(arr.size(), 1);

    arr.remove(0);

    assert.equal(arr.size(), 0);

    arr.insert(0, 30);

    assert.equal(arr.size(), 1);
    assert.equal(arr.get(0), 30);
});


test("set updates value without changing size", () => {
    const arr = new StaticArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    assert.equal(arr.size(), 3);

    arr.set(1, 99);

    assert.equal(arr.get(1), 99);
    assert.equal(arr.size(), 3);
    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(2), 30);
});


test("clears storage after removing the last element", () => {
    const arr = new StaticArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    arr.remove(2);

    assert.equal(arr.size(), 2);
    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 20);
    assert.equal(arr.storage[2], undefined);
});


