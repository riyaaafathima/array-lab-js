# Amortized Analysis of Dynamic Array Insertion

## Objective

To experimentally investigate why insertion at the end of a
DynamicArray can have O(1) amortized time even though individual
insertions that trigger resizing require O(n) work.

## Theoretical Complexity

Appending an element to a DynamicArray normally requires placing
the element into the next available position.

When sufficient capacity exists, the insertion requires constant
work:

O(1)

However, when the array becomes full, the DynamicArray must resize.

During resizing:

1. A larger storage area is allocated.
2. Existing elements are copied into the new storage.
3. The new element is inserted.

If the array contains n elements, the resize operation requires
O(n) copying work.

Therefore:

Normal insertion: O(1)

Insertion that triggers resize: O(n)

At first, this might suggest that insertion into a DynamicArray
is sometimes expensive.

Amortized analysis considers the total cost of a sequence of
operations rather than the cost of a single operation.

Because the capacity doubles after every resize, the total number
of elements copied across a sequence of n insertions is O(n).

Therefore:

Total cost of n insertions: O(n)

Amortized cost per insertion:

O(n) / n = O(1)

Thus, appending to a DynamicArray has O(1) amortized time.

## Experiment Setup

The experiment starts with a DynamicArray having an initial
capacity of 4.

Elements are inserted sequentially.

Whenever resizing occurs, the experiment counts:

- The number of resize operations
- The number of existing elements copied during each resize
- The total number of elements copied across all resizes

The following numbers of insertions were tested:

- 100
- 1,000
- 10,000
- 100,000

The capacity was doubled whenever the array became full.

## Results

| Number of Insertions | Resize Count | Total Elements Copied |
| -------------------: | -----------: | --------------------: |
|                  100 |            5 |                   124 |
|                1,000 |            8 |                 1,020 |
|               10,000 |           12 |                16,380 |
|              100,000 |           15 |               131,068 |

## Observation

The number of insertions increased from 100 to 100,000, which is
a 1,000× increase.

However, the number of resize operations increased only from
5 to 15.

The total number of elements copied was:

100 insertions → 124 copies

1,000 insertions → 1,020 copies

10,000 insertions → 16,380 copies

100,000 insertions → 131,068 copies

For 100,000 insertions, the total copying work was approximately
1.31 times the number of insertions.

This demonstrates that the expensive copying work does not occur
during every insertion.

## Why does this happen?

The capacity doubles after every resize:

4 → 8 → 16 → 32 → 64 → ...

The number of copied elements therefore forms a geometric series:

4 + 8 + 16 + 32 + ...

The total of this geometric series remains proportional to n.

Therefore, across n insertions:

Total copying work = O(n)

Since there are n insertions:

Amortized cost per insertion = O(1)

## Individual Cost vs Amortized Cost

It is important to distinguish between the cost of one operation
and the average cost over a sequence of operations.

A normal insertion:

O(1)

A resize-triggering insertion:

O(n)

A sequence of n insertions:

O(n) total

Average/amortized insertion cost:

O(1)

Therefore, saying that DynamicArray insertion is O(1) amortized
does not mean that every individual insertion takes constant time.

Some individual operations are expensive, but those expensive
operations are sufficiently infrequent that their cost is spread
across the sequence of insertions.

## Conclusion

The experiment provides empirical evidence for the O(1) amortized
insertion complexity of a DynamicArray using geometric capacity
growth.

Although individual resize operations require O(n) copying work,
the total copying performed across n insertions grows linearly
with n.

The capacity-doubling strategy is therefore what allows DynamicArray
append operations to achieve O(1) amortized time.

The experiment demonstrates the difference between worst-case
cost of an individual operation and amortized cost over a sequence
of operations.
