# Bubble Sort

## Objective

To experimentally observe how the execution time of Bubble Sort
changes as the array size increases, and to investigate its
quadratic growth by repeatedly comparing adjacent elements and
swapping elements that are in the wrong order.

## Theoretical Complexity

Bubble Sort has a time complexity of O(n²) in the average and
worst cases because it repeatedly compares adjacent elements
across multiple passes through the array.

During each pass, the largest unsorted element moves toward the
end of the array.

For an array of size n, the number of comparisons is approximately:

n + (n - 1) + (n - 2) + ... + 1

This results in approximately:

n(n - 1) / 2

comparisons, which grows quadratically with the input size.

Best case: O(n), when using an optimized version that stops early
if no swaps occur during a pass.

Average case: O(n²)

Worst case: O(n²)

## Experiment Setup

The experiment measures the execution time of Bubble Sort using
a reverse-sorted array.

A reverse-sorted array was chosen because it represents a
worst-case input for Bubble Sort. Most adjacent elements are in
the wrong order, resulting in a large number of swaps.

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

Only one Bubble Sort operation was performed per benchmark run
because Bubble Sort itself performs O(n²) work and is already
expensive for larger input sizes.

## Results

| Array Size |      Run 1 |      Run 2 |      Run 3 |    Average |
| ---------: | ---------: | ---------: | ---------: | ---------: |
|      1,000 |   7.367 ms |   6.454 ms |   6.882 ms |   6.901 ms |
|      5,000 |  70.036 ms |  69.029 ms |  69.584 ms |  69.550 ms |
|     10,000 | 254.839 ms | 256.579 ms | 257.064 ms | 256.161 ms |

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
69.55 ms to 256.16 ms, which is about 3.68× higher.

For quadratic growth, doubling the input size theoretically
results in approximately:

2² = 4×

the amount of work.

The measured increase of approximately 3.68× is reasonably
close to this expected quadratic growth.

When the array size increased from 1,000 to 10,000 elements,
the input size increased by 10×, while the average execution
time increased from approximately 6.90 ms to 256.16 ms,
which is about 37.12× higher.

The measured growth does not exactly match the theoretical
100× increase expected from a purely quadratic relationship.
This difference can be caused by runtime overhead, JIT
optimizations, CPU behavior, and other system-level factors.

## Conclusion

The experimental results are consistent with the theoretical
O(n²) time complexity of Bubble Sort.

In particular, when the array size increased from 5,000 to
10,000 elements, the input size doubled while the measured
execution time increased by approximately 3.68×, which is
reasonably close to the 4× growth expected from quadratic
complexity.

The results demonstrate that Bubble Sort's execution time grows
much faster than linearly as the input size increases.

The experiment provides empirical evidence consistent with
O(n²), but benchmark results alone do not mathematically prove
the Big-O complexity.
