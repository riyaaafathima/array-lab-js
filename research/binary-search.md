# Binary Search

## Objective

To experimentally observe how the execution time of binary search
changes as the array size increases, and to investigate its
logarithmic growth by eliminating approximately half of the
remaining search space after each comparison.

## Theoretical Complexity
Binary search has a time complexity of O(log n) because the array
must be sorted, allowing us to compare the target with the middle
element.

If the target is greater than the middle element, we can eliminate
the left half of the search space. If the target is smaller, we can
eliminate the right half.

Therefore, the search space is repeatedly reduced:

n → n/2 → n/4 → n/8 → ...

The number of times the search space can be divided by 2 grows
logarithmically with the size of the array.

Best case: O(1), when the target is the middle element.

Average case: O(log n)

Worst case: O(log n)## Experiment Setup

## Experiment Setup

The experiment performs 1,000,000 binary searches for the last
element in a sorted array.

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
| 1,000 | 67.04 ms | 69.34 ms | 71.79 ms | 69.39 ms |
| 10,000 | 100.67 ms | 102.10 ms | 101.75 ms | 101.51 ms |



## Why do the results vary?

The execution time can vary between benchmark runs because of
factors such as:

- Operating system scheduling and background processes
- CPU activity and other processes using the processor
- Node.js/V8 runtime behavior and optimizations
- Garbage collection and other runtime activity

Therefore, a single benchmark run should not be treated as an
exact measurement. Running the experiment multiple times helps
us observe the general trend.

## Observation

When the array size increased from 1,000 to 10,000 elements,
the input size increased by 10×. However, the average execution
time increased from approximately 69.39 ms to 101.51 ms, which
is only about 1.46× higher.

This shows that the execution time did not increase proportionally
with the array size. Binary search repeatedly eliminates
approximately half of the remaining search space, so the number
of comparisons grows much more slowly than the input size.

## Conclusion

The experimental results are consistent with the theoretical
O(log n) time complexity of binary search.

When the array size increased by 10×, the measured execution
time increased by only about 1.46× in this experiment. This
supports the idea that binary search scales logarithmically rather
than linearly with the input size.

The experiment provides empirical evidence consistent with O(log n),
but benchmark results alone do not mathematically prove the
Big-O complexity.
