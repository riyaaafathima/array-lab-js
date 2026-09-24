const test = require("node:test");
const assert = require("node:assert");
const DynamicArray = require("../src/dynamicArray");
const binarySearch = require("../src/algorithms/search/binarySearch");

test("target exists at the beginning", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);
    arr.insert(4, 50);

    assert.equal(binarySearch(arr, 10), 0);
});

test("target exists in the middle", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);
    arr.insert(4, 50);

    assert.equal(binarySearch(arr, 30), 2);
});

test("target exists at the end", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);
    arr.insert(4, 50);

    assert.equal(binarySearch(arr, 50), 4);
});

test("target does not exist", () => {
    const arr = new DynamicArray(5);

    arr.insert(0, 10);
    arr.insert(1, 20);
    arr.insert(2, 30);
    arr.insert(3, 40);
    arr.insert(4, 50);

    assert.equal(binarySearch(arr, 99), -1);
});

test("search in an empty array", () => {
    const arr = new DynamicArray(5);

    assert.equal(binarySearch(arr, 99), -1);
});