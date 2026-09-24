# Sorting Algorithm Comparison

## Objective

The objective of this research is to compare the sorting algorithms
implemented in ArrayLab:

-   Bubble Sort
-   Selection Sort
-   Insertion Sort

The comparison combines theoretical time and space complexity with
benchmark results collected from the implementations.

## Complexity Comparison

  Algorithm                                Best Case   Average Case   Worst Case   Space
  -------------------------------------- ----------- -------------- ------------ -------
  Bubble Sort (current implementation)         O(n²)          O(n²)        O(n²)    O(1)
  Selection Sort                               O(n²)          O(n²)        O(n²)    O(1)
  Insertion Sort                                O(n)          O(n²)        O(n²)    O(1)

## Theory

### Bubble Sort

Bubble Sort repeatedly compares adjacent elements and swaps them when
they are in the wrong order.

The current ArrayLab implementation does not use an early-exit
optimization. Therefore its best, average, and worst cases are O(n²).

A commonly optimized Bubble Sort can have O(n) best-case complexity by
stopping when a pass performs no swaps. That optimization is not present
here.

### Selection Sort

Selection Sort maintains a sorted region and an unsorted region. For
each position, it scans the remaining unsorted region to find the
minimum element and then performs one swap.

Its best, average, and worst cases are all O(n²), because it continues
scanning the remaining region even when the input is already sorted.

### Insertion Sort

Insertion Sort maintains a sorted region and inserts each new key into
its correct position by shifting larger elements.

Its best case is O(n) when the input is already sorted, because the
inner shifting loop performs almost no work. Its average and worst cases
are O(n²).

## Benchmark Setup

The benchmarks use the custom `DynamicArray` implementation.

For the sorting experiments, reverse-sorted input was used:

``` text
[n, n-1, n-2, ..., 2, 1]
```

Reverse-sorted input creates substantial work for these elementary
sorting algorithms and is a worst-case-style workload for Bubble Sort
and Insertion Sort. Selection Sort performs a similar number of
comparisons regardless of input ordering.

Each experiment was run three times.

Execution time was measured using:

``` js
process.hrtime.bigint()
```

# Bubble Sort Results

    Array Size   Run 1 (ms)   Run 2 (ms)   Run 3 (ms)   Average (ms)
  ------------ ------------ ------------ ------------ --------------
         1,000        7.367        6.454        6.882          6.901
         5,000       70.036       69.029       69.584         69.550
        10,000      254.839      256.579      257.064        256.161

### Observation

From 5,000 to 10,000 elements, the input size doubled while average
execution time increased by approximately 3.68×. Quadratic growth would
suggest roughly 4× as much work.

From 1,000 to 10,000 elements, input size increased by 10× while average
execution time increased by approximately 37×.

The results are consistent with O(n²), although a benchmark does not
mathematically prove Big-O complexity.

# Selection Sort Results

    Array Size   Run 1 (ms)   Run 2 (ms)   Run 3 (ms)   Average (ms)
  ------------ ------------ ------------ ------------ --------------
         1,000        4.615        5.309        4.719          4.881
         5,000       36.903       40.554       38.049         38.502
        10,000      130.052      142.297      130.029        134.126

### Observation

From 5,000 to 10,000 elements, average execution time increased by
approximately 3.48×.

This is consistent with the expected quadratic growth of Selection Sort.

Selection Sort performs many comparisons even when the input is already
sorted because it still searches the remaining unsorted region for the
minimum.

# Insertion Sort Results

    Array Size   Run 1 (ms)   Run 2 (ms)   Run 3 (ms)   Average (ms)
  ------------ ------------ ------------ ------------ --------------
         1,000        4.703        5.976        4.812          5.164
         5,000       41.960       42.544       40.346         41.617
        10,000      150.541      150.118      150.098        150.252

### Observation

From 5,000 to 10,000 elements, average execution time increased by
approximately 3.61×.

This is consistent with quadratic growth for reverse-sorted input.

Reverse-sorted input causes each new key to shift many previously
processed elements, producing approximately quadratic work.

## Why Insertion Sort Has an O(n) Best Case

Consider:

``` text
[1, 2, 3, 4, 5]
```

For each key, the previous element is already less than or equal to the
key. Therefore:

``` js
arr.get(j) > key
```

is immediately false.

The algorithm performs approximately one comparison per element and
almost no shifting:

``` text
n comparisons → O(n)
```

## Why Selection Sort Remains O(n²)

Even for:

``` text
[1, 2, 3, 4, 5]
```

Selection Sort still scans the remaining region:

``` text
4 comparisons
3 comparisons
2 comparisons
1 comparison
```

The total is proportional to n², so its best case remains O(n²).

The key difference is not simply swapping versus shifting. It is how
much work each algorithm can avoid when the input is already ordered.

## Bubble Sort Implementation Detail

The current Bubble Sort implementation uses:

``` js
j < arr.size() - i - 1
```

This avoids comparing elements that have already reached their final
positions.

However, it does not use an early-exit condition based on whether a pass
performed any swaps. Therefore, an already sorted array still executes
the nested loops and the current implementation remains O(n²) in its
best case.

## Benchmark Interpretation

The benchmark results are consistent with the theoretical complexity:

-   Bubble Sort shows approximately quadratic growth.
-   Selection Sort shows approximately quadratic growth.
-   Insertion Sort shows approximately quadratic growth on
    reverse-sorted input.

Exact runtime values depend on the machine, Node.js runtime, JIT
optimization, operating-system scheduling, garbage collection, and other
system activity.

The experiments therefore provide empirical evidence supporting the
theoretical complexity rather than mathematical proof.

## Key Takeaways

### Bubble Sort

-   Best: O(n²) for the current implementation
-   Average: O(n²)
-   Worst: O(n²)
-   Space: O(1)

### Selection Sort

-   Best: O(n²)
-   Average: O(n²)
-   Worst: O(n²)
-   Space: O(1)

### Insertion Sort

-   Best: O(n)
-   Average: O(n²)
-   Worst: O(n²)
-   Space: O(1)

The major conceptual difference is that Insertion Sort can take
advantage of already sorted input, while Selection Sort continues
scanning for a minimum regardless of input order.

## Final Comparison

  -----------------------------------------------------------------------
  Property          Bubble Sort       Selection Sort    Insertion Sort
  ----------------- ----------------- ----------------- -----------------
  Best case         O(n²)\*           O(n²)             O(n)

  Average case      O(n²)             O(n²)             O(n²)

  Worst case        O(n²)             O(n²)             O(n²)

  Space             O(1)              O(1)              O(1)

  Main operation    Adjacent swaps    Find minimum +    Shift + insert
                                      swap              key

  Benefits from     Not in current    No                Yes
  sorted input      implementation                      
  -----------------------------------------------------------------------

`*` The current Bubble Sort implementation has O(n²) best-case
complexity because it does not use an early-exit optimization.