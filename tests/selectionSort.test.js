const test = require("node:test");
const assert = require("node:assert");

const DynamicArray = require("../src/dynamicArray.js");
const selectionSort = require("../src/algorithms/sort/selectionSort.js");

test("sorts an unsorted array", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 4);
    arr.insert(1, 2);
    arr.insert(2, 7);
    arr.insert(3, 1);

    const result = selectionSort(arr);

    assert.strictEqual(result.get(0), 1);
    assert.strictEqual(result.get(1), 2);
    assert.strictEqual(result.get(2), 4);
    assert.strictEqual(result.get(3), 7);
});

test("keeps an already sorted array unchanged", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 1);
    arr.insert(1, 2);
    arr.insert(2, 4);
    arr.insert(3, 7);

    const result = selectionSort(arr);

    assert.strictEqual(result.get(0), 1);
    assert.strictEqual(result.get(1), 2);
    assert.strictEqual(result.get(2), 4);
    assert.strictEqual(result.get(3), 7);
});

test("sorts a reverse sorted array", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 7);
    arr.insert(1, 4);
    arr.insert(2, 2);
    arr.insert(3, 1);

    const result = selectionSort(arr);

    assert.strictEqual(result.get(0), 1);
    assert.strictEqual(result.get(1), 2);
    assert.strictEqual(result.get(2), 4);
    assert.strictEqual(result.get(3), 7);
});

test("sorts an array with duplicate values", () => {
    const arr = new DynamicArray(6);

    arr.insert(0, 4);
    arr.insert(1, 2);
    arr.insert(2, 4);
    arr.insert(3, 1);
    arr.insert(4, 2);

    const result = selectionSort(arr);

    assert.strictEqual(result.get(0), 1);
    assert.strictEqual(result.get(1), 2);
    assert.strictEqual(result.get(2), 2);
    assert.strictEqual(result.get(3), 4);
    assert.strictEqual(result.get(4), 4);
});

test("handles a single element array", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);

    const result = selectionSort(arr);

    assert.strictEqual(result.get(0), 10);
    assert.strictEqual(result.size(), 1);
});

test("handles an empty array", () => {
    const arr = new DynamicArray(5);

    const result = selectionSort(arr);

    assert.strictEqual(result.size(), 0);
});