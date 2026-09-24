# Selection Sort

## Objective

To experimentally observe how the execution time of Selection Sort
changes as the array size increases, and to investigate its
quadratic growth by repeatedly searching the unsorted portion
of the array for the minimum element.

## Theoretical Complexity

Selection Sort has a time complexity of O(n²) because for each
position in the array, it searches through the remaining unsorted
portion to find the minimum element.

For an array of size n, the number of comparisons is approximately:

(n - 1) + (n - 2) + (n - 3) + ... + 1

This can be expressed as:

n(n - 1) / 2

which grows quadratically with the input size.

Unlike Bubble Sort, Selection Sort performs approximately the same
number of comparisons regardless of whether the input is already
sorted, randomly ordered, or reverse sorted. The minimum element
cannot be identified without examining the remaining unsorted
elements.

Best case: O(n²)

Average case: O(n²)

Worst case: O(n²)

Selection Sort uses constant auxiliary space because it sorts the
array in place and only requires a small number of additional
variables for tracking the minimum index and performing swaps.

## Experiment Setup

The experiment measures the execution time of Selection Sort using
a reverse-sorted array.

A reverse-sorted array was used as the input:

[1000, 999, 998, ..., 2, 1]

The same pattern was used for the larger array sizes.

Three array sizes were tested:

- Array size: 1,000
- Input: [1000, 999, 998, ..., 2, 1]

Then:

- Array size: 5,000
- Input: [5000, 4999, 4998, ..., 2, 1]

Then:

- Array size: 10,000
- Input: [10000, 9999, 9998, ..., 2, 1]

The execution time was measured using `process.hrtime.bigint()`.

Each configuration was executed three times.

Only one Selection Sort operation was performed per benchmark
run because Selection Sort already performs O(n²) comparisons and
is sufficiently expensive for the tested input sizes.

## Results

| Array Size |      Run 1 |      Run 2 |      Run 3 |    Average |
| ---------: | ---------: | ---------: | ---------: | ---------: |
|      1,000 |   4.615 ms |   5.309 ms |   4.719 ms |   4.881 ms |
|      5,000 |  36.903 ms |  40.554 ms |  38.049 ms |  38.502 ms |
|     10,000 | 130.052 ms | 142.297 ms | 130.029 ms | 134.126 ms |

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

When the array size increased from 5,000 to 10,000 elements,
the input size increased by 2×.

The average execution time increased from approximately
38.502 ms to 134.126 ms, which is about 3.48× higher.

For quadratic growth, doubling the input size theoretically
results in approximately:

2² = 4×

the amount of work.

The measured increase of approximately 3.48× is reasonably close
to this expected quadratic growth.

When the array size increased from 1,000 to 10,000 elements,
the input size increased by 10×, while the average execution
time increased from approximately 4.881 ms to 134.126 ms,
which is about 27.48× higher.

The measured growth does not exactly match the theoretical
100× increase expected from a purely quadratic relationship.
This difference can be caused by runtime overhead, JIT
optimizations, CPU behavior, and other system-level factors.

An important characteristic of Selection Sort is that the number
of comparisons is largely independent of the initial ordering of
the input. Even if the array is already sorted, the algorithm
still searches the remaining unsorted portion to identify the
minimum element.

## Conclusion

The experimental results are consistent with the theoretical
O(n²) time complexity of Selection Sort.

In particular, when the array size increased from 5,000 to
10,000 elements, the input size doubled while the measured
execution time increased by approximately 3.48×, which is
reasonably close to the 4× growth expected from quadratic
complexity.

The results demonstrate that Selection Sort's execution time
grows much faster than linearly as the input size increases.

The experiment provides empirical evidence consistent with
O(n²), but benchmark results alone do not mathematically prove
the Big-O complexity.
