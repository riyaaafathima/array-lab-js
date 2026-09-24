# Array Insertion and Deletion Performance

## Objective

The objective of this experiment is to observe how the position of an
insertion or deletion affects execution time in a dynamic array.

The experiment compares operations performed at the beginning, middle,
and end of the array.

The goal is to observe whether the experimental results are consistent
with the theoretical time complexities of these operations.

---

## Theory

### Array Insertion

When inserting an element into the beginning or middle of an array,
existing elements must be shifted to create space.

- Beginning insertion: O(n)
- Middle insertion: O(n)
- End insertion: O(1), when sufficient capacity is available

Although middle insertion shifts fewer elements than beginning
insertion, it is still O(n) because approximately n/2 elements may need
to be shifted.

### Array Deletion

Deletion works similarly.

When deleting from the beginning or middle, elements after the deleted
index must be shifted left.

- Beginning deletion: O(n)
- Middle deletion: O(n)
- End deletion: O(1), when shrinking is not triggered

The `remove()` operation can also trigger `shrink()`. Since `shrink()`
copies all current elements into a new storage array, shrinking itself
is O(n).

Therefore, the O(1) end-deletion result applies when no shrink operation
is triggered.

---

## Benchmark Setup

The experiments were performed using the custom `DynamicArray`
implementation in this project.

For insertion and deletion experiments, the initial capacity was
intentionally made much larger than the number of elements being tested:

```js
const arr = new DynamicArray(n + 1_000_000);
```

This prevents resizing or shrinking from interfering with the timed
operation.

For each array size:

- 1,000
- 5,000
- 10,000

the experiment was run three times.

Execution time was measured using:

```js
process.hrtime.bigint();
```

---

# Insertion

## Beginning Insertion

The experiment measured:

```js
arr.insert(0, -1);
```

### Results

    Array Size   Run 1 (ns)   Run 2 (ns)   Run 3 (ns)   Average (ns)

---

         1,000       73,507       38,150       70,147         60,601
         5,000      136,450      104,703      107,589        116,247
        10,000      295,549      220,997      242,337        252,961

### Observation

As the array size increased, the execution time generally increased.

This is consistent with O(n) because inserting at index 0 requires
shifting almost all existing elements one position to the right.

The benchmark is empirical evidence supporting the theoretical
complexity, not a mathematical proof.

---

## Middle Insertion

The experiment measured:

```js
arr.insert(Math.floor(n / 2), -1);
```

### Results

    Array Size   Run 1 (ns)   Run 2 (ns)   Run 3 (ns)   Average (ns)

---

         1,000       40,572       39,459       40,591         40,207
         5,000       54,098       55,243       55,842         55,061
        10,000      107,778      105,198      142,708        118,561

### Observation

Middle insertion also becomes slower as the array grows.

Approximately half of the elements may need to be shifted, but n/2 is
still O(n).

The measured time is lower than beginning insertion in these runs
because fewer elements need to be shifted, but both operations have the
same asymptotic complexity: O(n).

---

## End Insertion

The experiment measured repeated end insertions to reduce measurement
noise:

```js
for (let i = 0; i < 1_000_000; i++) {
  arr.insert(arr.size(), -1);
}
```

### Results

    Array Size   Run 1 (ns)   Run 2 (ns)   Run 3 (ns)   Average (ns)

---

         1,000    4,697,136    4,933,230    4,498,768      4,709,711
         5,000    2,706,833    2,533,936    2,612,387      2,617,719
        10,000    2,746,578    3,927,042    3,082,084      3,251,901

### Observation

The execution time did not increase consistently with array size.

The values fluctuated because the operation is very small and the
measurement is affected by factors such as Node.js runtime overhead, CPU
scheduling, JIT optimization, and other system activity.

This behavior is consistent with O(1) end insertion when sufficient
capacity is available.

---

# Deletion

## Beginning Deletion

The experiment performed 1,000 deletions from index 0:

```js
for (let i = 0; i < 1000; i++) {
  arr.remove(0);
}
```

### Results

    Array Size   Run 1 (ns)   Run 2 (ns)   Run 3 (ns)   Average (ns)

---

         1,000    2,319,964    2,715,782    2,032,082      2,355,943
         5,000    5,694,615    6,264,945    5,839,332      5,932,964
        10,000   11,158,611    8,924,560   11,285,150     10,456,107

### Observation

Execution time increased as the initial array size increased.

Beginning deletion requires shifting almost every remaining element
after index 0 to the left.

This is consistent with O(n) time complexity.

---

## Middle Deletion

The experiment performed 1,000 deletions from the middle:

```js
for (let i = 0; i < 1000; i++) {
  arr.remove(Math.floor(arr.size() / 2));
}
```

### Results

    Array Size   Run 1 (ns)   Run 2 (ns)   Run 3 (ns)   Average (ns)

---

         1,000    2,202,396    2,149,725    2,136,647      2,162,923
         5,000    3,459,491    3,598,725    3,613,105      3,557,107
        10,000    6,592,615    5,537,314    4,346,937      5,492,289

### Observation

The execution time generally increased with array size.

Middle deletion shifts approximately half of the remaining elements.
Although this is fewer elements than beginning deletion, n/2 is still
O(n).

Therefore, middle deletion remains O(n).

---

## End Deletion

The experiment performed 1,000 deletions from the last index:

```js
for (let i = 0; i < 1000; i++) {
  arr.remove(arr.size() - 1);
}
```

### Results

    Array Size   Run 1 (ns)   Run 2 (ns)   Run 3 (ns)   Average (ns)

---

         1,000      172,849      187,820      171,681        177,450
         5,000      115,399      114,663      149,703        126,588
        10,000      100,766      147,171      116,793        121,577

### Observation

Execution time did not increase with array size.

Deleting the last element does not require shifting any other elements.
In this experiment, the large initial capacity also prevented shrinking
from occurring.

The results are therefore consistent with O(1) end deletion.

---

# Summary

Operation Elements potentially shifted Expected Complexity

---

Insert at beginning \~n O(n)
Insert in middle \~n/2 O(n)
Insert at end 0 O(1)
Delete at beginning \~n O(n)
Delete in middle \~n/2 O(n)
Delete at end 0 O(1)

The experiments demonstrate an important property of arrays:

> The complexity of insertion and deletion depends strongly on the
> position of the operation.

Beginning and middle operations require elements to be shifted, while
operations at the end do not.

---

## Important Benchmark Limitation

These experiments provide empirical evidence rather than mathematical
proof of Big-O complexity.

Execution times can vary because of:

- operating-system scheduling
- CPU activity
- Node.js runtime behavior
- JIT optimization
- garbage collection
- measurement overhead

The benchmark therefore helps compare observed growth with theoretical
complexity rather than proving the complexity itself.

---

## Additional Dynamic Array Consideration

The `DynamicArray` implementation can resize when it becomes full and
can shrink when the number of elements becomes sufficiently small.

The `shrink()` operation copies all existing elements into a new storage
array:

```js
for (let i = 0; i < this.arraySize; i++) {
  newStorage[i] = this.storage[i];
}
```

Therefore:

- `shrink()` itself is O(n)
- an end deletion that triggers shrinking can become O(n)
- the O(1) end-deletion result applies when no shrinking occurs

This distinction is important when analyzing the real cost of
dynamic-array operations.
