# Insertion Sort

## Objective

To experimentally observe how the execution time of Insertion Sort
changes as the array size increases, and to investigate its
quadratic growth by repeatedly shifting larger elements to the
right while inserting each element into its correct position.

## Theoretical Complexity

Insertion Sort works by maintaining a sorted portion of the array
and inserting each new element into its correct position within
that sorted portion.

For each element, the algorithm may need to compare it with and
shift multiple elements that are larger than it.

In the worst case, such as a reverse-sorted array, the number of
shifts and comparisons is approximately:

1 + 2 + 3 + ... + (n - 1)

This can be expressed as:

n(n - 1) / 2

which grows quadratically with the input size.

Best case: O(n), when the array is already sorted.

Average case: O(n²)

Worst case: O(n²), when the array is reverse sorted.

Insertion Sort sorts the array in place and uses a constant amount
of additional memory.

Space complexity: O(1)

## Experiment Setup

The experiment measures the execution time of Insertion Sort using
a reverse-sorted array.

A reverse-sorted array was chosen because it represents the
worst-case input for Insertion Sort. Each new element is smaller
than the elements in the sorted portion, so many elements must be
shifted to the right.

Three array sizes were tested:

- Array size: 1,000
- Input: [1000, 999, 998, ..., 2, 1]

Then:

- Array size: 5,000
- Input: [5000, 4999, 4998, ..., 2, 1]

Then:

- Array size: 10,000
- Input: [10000, 9999, 9998, ..., 2, 1]

The execution time was measured using
`process.hrtime.bigint()`.

Each configuration was executed three times.

Only one Insertion Sort operation was performed per benchmark run
because Insertion Sort already performs O(n²) work on the selected
worst-case input.

## Results

| Array Size |      Run 1 |      Run 2 |      Run 3 |    Average |
| ---------: | ---------: | ---------: | ---------: | ---------: |
|      1,000 |   4.703 ms |   5.976 ms |   4.812 ms |   5.164 ms |
|      5,000 |  41.960 ms |  42.544 ms |  40.346 ms |  41.617 ms |
|     10,000 | 150.541 ms | 150.118 ms | 150.098 ms | 150.252 ms |

## Why do the results vary?

The execution time can vary between benchmark runs because of
factors such as:

- OS scheduling and background processes
- CPU activity
- Node.js/V8 runtime behavior and optimizations
- Garbage collection and other runtime activity

Therefore, a single benchmark run should not be treated as exact.
Running multiple times helps observe the general performance trend.

## Observation

When array size increased from 5,000 to 10,000, the input size
increased by 2×.

Average execution time increased from:

41.617 ms → 150.252 ms

This is approximately:

150.252 / 41.617 ≈ 3.61×

For quadratic growth, doubling the input size theoretically gives:

2² = 4×

The measured increase of approximately 3.61× is reasonably close
to the expected quadratic growth.

When array size increased from 1,000 to 10,000, the input size
increased by 10×.

Average execution time increased from:

5.164 ms → 150.252 ms

This is approximately:

150.252 / 5.164 ≈ 29.1×

The result is not exactly the theoretical 100× increase expected
from a pure quadratic model. Differences can occur because of
runtime overhead, JIT optimizations, CPU behavior, and other
environmental factors.

## Conclusion

The benchmark results are consistent with the expected O(n²)
behavior of Insertion Sort on reverse-sorted input.

When the input size doubled from 5,000 to 10,000, the average
execution time increased by approximately 3.61×, which is
reasonably close to the 4× growth expected from quadratic
complexity.

The experiment provides empirical evidence supporting the
theoretical complexity, but it does not mathematically prove
O(n²).

Insertion Sort also demonstrates an important difference between
best and worst cases. When the array is already sorted, each
element can be checked and left in place, resulting in O(n)
behavior. When the array is reverse sorted, many elements must be
shifted, resulting in O(n²) behavior.
