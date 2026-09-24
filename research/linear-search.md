# Linear Search

## Objective

To experimentally observe whether linear search remains approximately constant or grow as the array size increases.

## Theoretical Complexity
Linear search has a best-case complexity of O(1) when the target
is the first element.

In the average and worst cases, linear search is O(n) because
we may need to examine multiple elements before finding the target.
If the target is the last element or does not exist, we may need
to examine every element in the array.

This experiment focuses on the worst case by searching for the
last element of the array.

## Experiment Setup


The experiment performs 1,000,000 linear searches for the last
element in the array.

Two array sizes were tested:

- Array size: 1,000
- Target: 999
- Number of searches: 1,000,000

Then:

- Array size: 10,000
- Target: 9,999
- Number of searches: 1,000,000

The execution time was measured using `process.hrtime.bigint()`.
Each configuration was executed three times.

## Results


| Array Size | Run 1 | Run 2 | Run 3 | Average |
|-----------:|------:|------:|------:|--------:|
| 1,000 | 1.248 s | 1.231 s | 1.226 s | 1.235 s |
| 10,000 | 12.539 s | 12.113 s | 12.062 s | 12.238 s |

## Why do the results vary?

The execution time can vary between benchmark runs because of factors such as:

- Operating system scheduling and background processes
- CPU activity and other processes using the processor
- Node.js/V8 runtime behavior and optimizations
- Garbage collection and other runtime activity

Therefore, a single benchmark run should not be treated as an exact measurement. Running the experiment multiple times helps us observe the general trend.

## Observation
Increasing the array size from 1,000 to 10,000 increased the
average execution time from 1.235 seconds to 12.238 seconds.

The array size increased by 10×, while the average execution
time increased by approximately 9.91×:

12.238 / 1.235 ≈ 9.91

This shows that the execution time increased approximately
proportionally with the array size.
## Conclusion

The results are consistent with the theoretical complexity of
linear search.

The best case is O(1) when the target is the first element.
The average case is O(n), and the worst case is O(n) when the
target is at the last position or does not exist.

In this experiment, increasing the array size by 10× resulted
in approximately a 9.91× increase in average execution time.
This provides empirical evidence consistent with the O(n)
growth of linear search.