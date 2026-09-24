const test=require("node:test");
const assert= require("node:assert");
const DynamicArray=require("../src/dynamicArray.js");

test("creates an empty dynamic array", () => {
    const arr = new DynamicArray(5);

    assert.equal(arr.size(), 0);
    assert.equal(arr.getCapacity(), 5);
});


test("insert at the beginning",()=>{
    const arr1=new DynamicArray(5);
    arr1.insert(0,10)
    arr1.insert(0,20)

    assert.equal(arr1.get(0), 20);
    assert.equal(arr1.get(1), 10);
    assert.equal(arr1.size(), 2);

})



test("insert in the middle", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    arr.insert(1, 99);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 99);
    assert.equal(arr.get(2), 20);
    assert.equal(arr.get(3), 30);
    assert.equal(arr.size(), 4);
});




test("insert at the end", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    assert.equal(arr.get(2), 30);
    assert.equal(arr.size(), 3);
});



test("updates an existing element", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);

    arr.set(1, 99);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 99);
    assert.equal(arr.size(), 2);
});



test("rejects invalid indexes", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);

    assert.equal(arr.get(-1), "index doesnot exist");
    assert.equal(arr.get(1), "index doesnot exist");

    assert.equal(arr.set(-1, 20), "invalid index");
    assert.equal(arr.set(1, 20), "invalid index");

    assert.equal(arr.insert(-1, 20), "index is not valid");
    assert.equal(arr.insert(2, 20), "index is not valid");
});



test("automatically resizes when full", () => {
    const arr = new DynamicArray(3);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    arr.insert(3, 40);

    assert.equal(arr.getCapacity(), 6);
    assert.equal(arr.size(), 4);
});




test("preserves existing elements after resize", () => {
    const arr = new DynamicArray(3);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    arr.insert(3, 40);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 20);
    assert.equal(arr.get(2), 30);
    assert.equal(arr.get(3), 40);
});


test("resizes and inserts in the middle", () => {
    const arr = new DynamicArray(4);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);

    arr.insert(2, 99);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 20);
    assert.equal(arr.get(2), 99);
    assert.equal(arr.get(3), 30);
    assert.equal(arr.get(4), 40);

    assert.equal(arr.size(), 5);
    assert.equal(arr.getCapacity(), 8);
});




test("handles multiple resizes", () => {
    const arr = new DynamicArray(2);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);
    arr.insert(4, 50);

    assert.equal(arr.size(), 5);
    assert.equal(arr.getCapacity(), 8);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 20);
    assert.equal(arr.get(2), 30);
    assert.equal(arr.get(3), 40);
    assert.equal(arr.get(4), 50);
});



test("remove the last element", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    arr.remove(2);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 20);
    assert.equal(arr.size(), 2);
});

test("remove the first element", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    arr.remove(0);

    assert.equal(arr.get(0), 20);
    assert.equal(arr.get(1), 30);
    assert.equal(arr.size(), 2);
});


test("remove an element from the middle", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);

    arr.remove(1);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 30);
    assert.equal(arr.get(2), 40);
    assert.equal(arr.size(), 3);
});




test("shrinks when array becomes 25% full", () => {
    const arr = new DynamicArray(4);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);

    // 4 → 8
    arr.insert(4, 50);

    assert.equal(arr.getCapacity(), 8);

    // size: 5 → 4 → 3 → 2
    arr.remove(4);
    arr.remove(3);
    arr.remove(2);

    assert.equal(arr.size(), 2);
    assert.equal(arr.getCapacity(), 4);
});


test("does not shrink below minimum capacity", () => {
    const arr = new DynamicArray(4);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);

    arr.insert(4, 50); // capacity becomes 8

    arr.remove(4);
    arr.remove(3);
    arr.remove(2);
    arr.remove(1);

    assert.equal(arr.size(), 1);
    assert.equal(arr.getCapacity(), 4);
});


test("preserves elements after shrinking", () => {
    const arr = new DynamicArray(4);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);
    arr.insert(4, 50);

    arr.remove(4);
    arr.remove(3);
    arr.remove(2);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 20);
    assert.equal(arr.size(), 2);
    assert.equal(arr.getCapacity(), 4);
});


test("shrinks capacity while preserving elements", () => {
    const arr = new DynamicArray(5);

    for (let i = 0; i < 11; i++) {
        arr.insert(i, i);
    }

    assert.strictEqual(arr.getCapacity(), 20);

    // Remove until size becomes 5
    while (arr.size() > 5) {
        arr.remove(arr.size() - 1);
    }

    assert.strictEqual(arr.size(), 5);
    assert.strictEqual(arr.getCapacity(), 10);

    assert.strictEqual(arr.get(0), 0);
    assert.strictEqual(arr.get(1), 1);
    assert.strictEqual(arr.get(2), 2);
    assert.strictEqual(arr.get(3), 3);
    assert.strictEqual(arr.get(4), 4);

    // Remove until size becomes 2
    while (arr.size() > 2) {
        arr.remove(arr.size() - 1);
    }

    assert.strictEqual(arr.size(), 2);
    assert.strictEqual(arr.getCapacity(), 5);

    assert.strictEqual(arr.get(0), 0);
    assert.strictEqual(arr.get(1), 1);
});


//  edge case for capacity;

test("edge case for capacity 1",()=>{
    const arr=new DynamicArray(1);
  
     arr.insert(0, 10);
    arr.insert(1,20);

    assert.equal(arr.get(0),10)
    assert.equal(arr.get(1),20)
    assert.equal(arr.size(),2)
    assert.equal(arr.getCapacity(),2)

})


test("handles capacity 0", () => {
    const arr = new DynamicArray(0);

    arr.insert(0, 10);

    assert.equal(arr.get(0), 10);
    assert.equal(arr.size(), 1);

    assert.ok(arr.getCapacity() >= 1);
});


test("rejects negative capacity", () => {
    assert.throws(
        () => new DynamicArray(-5),
        /capacity cannot be negative/
    );
});

test("clears storage after removing the last element", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);

    arr.remove(2);

    assert.equal(arr.size(), 2);
    assert.equal(arr.get(0), 10);
    assert.equal(arr.get(1), 20);
    assert.equal(arr.storage[2], undefined);
});