const DynamicArray = require("../src/dynamicArray.js");

function runExperiment(n) {
    // const arr = new DynamicArray(n+1);
    const arr = new DynamicArray(n + 1_000_000);

    for (let i = 0; i < n; i++) {
        arr.insert(i, i);
    }

    const start = process.hrtime.bigint();

      for (let i = 0; i < 1_000_000; i++) {
        arr.insert(arr.size(), -1);      //end 
    }
      
    //    arr.insert(0,-1) // beginning 
    // arr.insert(Math.floor(n / 2), -1); // middle
    const end = process.hrtime.bigint();

    console.log(`Array size: ${n}`);
    console.log(`Time: ${end - start} nanoseconds`);
}

runExperiment(1000);
runExperiment(5000);
runExperiment(10000);