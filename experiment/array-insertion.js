const DynamicArray = require("../src/dynamicArray.js");

/*
this experiment measure the time required to repeatedly 
insert elements at the end of the arr
*/
function runExperiment(n) {
  const arr = new DynamicArray(n + 1_000_000);

  for (let i = 0; i < n; i++) {
    arr.insert(i, i);
  }
  const start = process.hrtime.bigint();

  for (let i = 0; i < 1_000_000; i++) {
    arr.insert(arr.size(), -1);
  }
  const end = process.hrtime.bigint();

  console.log(`Array size: ${n}`);
  console.log(`Time: ${end - start} nanseconds`);
}

runExperiment(1000);
runExperiment(5000);
runExperiment(10000);
