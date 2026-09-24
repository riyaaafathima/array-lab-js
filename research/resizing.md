# Dynamic Array Resizing

## Objective

To experimentally observe how the capacity of a DynamicArray changes
as elements are inserted, and to investigate the cost of resizing
when the array reaches its capacity.

## Theoretical Complexity

A DynamicArray cannot store more elements than its current capacity.

When the array becomes full, it allocates a new storage area with
larger capacity and copies the existing elements into the new
storage.

In this implementation, the capacity is doubled during resizing:

4 → 8 → 16 → 32 → 64 → ...

The resize operation requires copying all existing elements.

If the array contains n elements when resizing occurs, approximately
n elements must be copied.

Therefore:

Resize operation: O(n)

The number of resize operations required to grow from a small
capacity to n elements is logarithmic because the capacity doubles
each time.

Number of resizes: O(log n)

## Experiment Setup

The experiment starts a DynamicArray with an initial capacity of 4.

Elements are inserted sequentially until the specified array size
is reached.

Whenever the capacity changes, the experiment records:

- The old capacity
- The new capacity
- The number of existing elements copied
- The total number of resize operations

The following array sizes were tested:

- 100
- 1,000
- 10,000
- 100,000

The capacity was doubled whenever the array became full.

## Results

| Array Size | Resize Count | Total Elements Copied |
| ---------: | -----------: | --------------------: |
|        100 |            5 |                   124 |
|      1,000 |            8 |                 1,020 |
|     10,000 |           12 |                16,380 |
|    100,000 |           15 |               131,068 |

## Observation

The capacity increased geometrically:

4 → 8 → 16 → 32 → 64 → ...

As the number of insertions increased from 100 to 100,000,
the number of resize operations increased only from 5 to 15.

This demonstrates that doubling the capacity prevents resizing
from occurring on every insertion.

The total number of elements copied also grows roughly
proportionally to the number of insertions.

For 100,000 insertions, only 131,068 existing elements were copied
during all resize operations.

## Why do resize operations become less frequent?

After every resize, the capacity is doubled.

For example:

4 → 8

After reaching 8 elements:

8 → 16

After reaching 16 elements:

16 → 32

Each resize creates a larger amount of available space, so more
insertions can occur before the next resize is required.

This causes the number of resize operations to grow logarithmically
rather than linearly.

## Conclusion

A DynamicArray resize operation is O(n) because existing elements
must be copied into the newly allocated storage.

However, because the capacity doubles after each resize, resizing
occurs increasingly less frequently.

The experiment showed that increasing the number of insertions from
100 to 100,000 increased the number of resizes from only 5 to 15.

The results are consistent with the expected logarithmic growth in
the number of resize operations.

The experiment provides empirical evidence supporting the theoretical
complexity of DynamicArray resizing.
