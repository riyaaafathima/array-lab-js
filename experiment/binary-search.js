const binarySearch = require("../src/algorithms/search/binarySearch");

const DynamicArray = require("../src/dynamicArray");

function runExperiment(n) {
  const arr = new DynamicArray(n);

  for (let i = 0; i < n; i++) {
    arr.insert(i, i);
  }
  const start = process.hrtime.bigint();

  for (let i = 0; i < 1_000_000; i++) {
    binarySearch(arr, n - 1);
  }
  const end = process.hrtime.bigint();
  console.log(`Array size: ${n}`);
  console.log(`Time: ${end - start} nanoseconds`);
}

runExperiment(1000);
runExperiment(10_000);
runExperiment(100_000);
