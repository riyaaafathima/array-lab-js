# Array indexed Access 

## objective 
To experimentally observe whether indexed access remains approximately constant as the array size increases.

## Theoretical complexity 

Indexed access in an array is O(1) because the address of an element can be calculated directly using its index. The location can be determined using the base address, the index, and the size of each element.

address = base address + (index × element size)

## Experiment Setup

- Array size: 1,000
- Number of accesses: 1,000,000


Then:

- Array size: 10,000
- Number of accesses: 1,000,000


## Results


| Array size |        Run 1 |        Run 2 |        Run 3 |
| ---------: | -----------: | -----------: | -----------: |
|      1,000 | 5,289,721 ns | 5,440,385 ns | 4,116,256 ns |
|     10,000 | 3,529,268 ns | 2,985,119 ns | 3,544,868 ns |


Or approximately:

| Array size |   Run 1 |   Run 2 |   Run 3 |
| ---------: | ------: | ------: | ------: |
|      1,000 | 5.29 ms | 5.44 ms | 4.12 ms |
|     10,000 | 3.53 ms | 2.99 ms | 3.54 ms |



## Why do the results vary?

The execution time can vary between benchmark runs because of factors such as:

- Operating system scheduling and background processes
- CPU activity and other processes using the processor
- Node.js/V8 runtime behavior and optimizations
- Garbage collection and other runtime activity

Therefore, a single benchmark run should not be treated as an exact measurement. Running the experiment multiple times helps us observe the general trend.


## Observation 
 
Increasing the array size from 1,000 to 10,000 did not cause a proportional increase in the time required for 1,000,000 indexed accesses. The measured times remained in a similar range, although there was some variation between runs.

 ## conclusion 

The results are consistent with the theoretical O(1) complexity of indexed array access. The experiment does not prove the complexity mathematically, but it provides empirical evidence that increasing the array size does not proportionally increase indexed access time.