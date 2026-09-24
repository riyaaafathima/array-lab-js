const DynamicArray = require("../src/dynamicArray.js");

function runExperiment(n) {
  const arr = new DynamicArray(4);
  let resizeCount = 0;
  let totalCopied = 0;

  for (let i = 0; i < n; i++) {
    let oldCapacity = arr.getCapacity();
    let oldSize = arr.size();
    arr.insert(i, i);

    if (arr.getCapacity() !== oldCapacity) {
      resizeCount++;
      totalCopied += oldSize;
    }
  }

  console.log(`\nArray size: ${n}`);
  console.log(`Resize count: ${resizeCount}`);
  console.log(`Total elements copied: ${totalCopied}`);
}

runExperiment(100);
runExperiment(1_000);
runExperiment(10_000);
runExperiment(100_000);
