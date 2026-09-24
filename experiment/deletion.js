const DynamicArray = require("../src/dynamicArray.js");

function runExperiment(n) {
    const arr = new DynamicArray(n + 1_000_000);

   for (let i = 0; i < n; i++) {
        arr.insert(i, i);
    }

    const start = process.hrtime.bigint();

    for (let i = 0; i < 1000; i++) {
arr.remove(arr.size() - 1);
    }
    const end = process.hrtime.bigint();

    console.log(`Array size: ${n}`);
    console.log(`Time: ${end - start} nanoseconds`);
}

runExperiment(1000);
runExperiment(5000);
runExperiment(10000);