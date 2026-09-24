const DynamicArray = require("../src/dynamicArray");
const bubbleSort = require("../src/algorithms/sort/bubbleSort.js");

function runExperiment(n) {
  const arr = new DynamicArray(n);

  for (let i = n; i > 0; i--) {
    arr.insert(arr.size(), i);
  }

  console.log(`\nArray size: ${n}`);
  console.log("first:", arr.get(0));
  console.log("last:", arr.get(arr.size() - 1));

  const start = process.hrtime.bigint();

  bubbleSort(arr);

  const end = process.hrtime.bigint();

  console.log(`Time: ${end - start} nanoseconds`);
}

runExperiment(1000);
runExperiment(5000);
runExperiment(10000);
