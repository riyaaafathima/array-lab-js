const test = require("node:test");
const assert = require("node:assert");

const DynamicArray = require("../src/dynamicArray.js");
const insertionSort = require("../src/algorithms/sort/insertionSort.js");

function createArray(values) {
    const arr = new DynamicArray(values.length);

    for (let i = 0; i < values.length; i++) {
        arr.insert(i, values[i]);
    }

    return arr;
}

function toArray(arr) {
    const result = [];

    for (let i = 0; i < arr.size(); i++) {
        result.push(arr.get(i));
    }

    return result;
}

test("sorts an unsorted array", () => {
    const arr = createArray([5, 3, 8, 2, 4]);

    insertionSort(arr);

    assert.deepStrictEqual(
        toArray(arr),
        [2, 3, 4, 5, 8]
    );
});

test("keeps an already sorted array sorted", () => {
    const arr = createArray([1, 2, 3, 4, 5]);

    insertionSort(arr);

    assert.deepStrictEqual(
        toArray(arr),
        [1, 2, 3, 4, 5]
    );
});

test("sorts a reverse sorted array", () => {
    const arr = createArray([5, 4, 3, 2, 1]);

    insertionSort(arr);

    assert.deepStrictEqual(
        toArray(arr),
        [1, 2, 3, 4, 5]
    );
});

test("handles duplicate values", () => {
    const arr = createArray([4, 2, 4, 1, 2]);

    insertionSort(arr);

    assert.deepStrictEqual(
        toArray(arr),
        [1, 2, 2, 4, 4]
    );
});

test("handles a single element", () => {
    const arr = createArray([7]);

    insertionSort(arr);

    assert.deepStrictEqual(
        toArray(arr),
        [7]
    );
});

test("handles an empty array", () => {
    const arr = createArray([]);

    insertionSort(arr);

    assert.deepStrictEqual(
        toArray(arr),
        []
    );
});