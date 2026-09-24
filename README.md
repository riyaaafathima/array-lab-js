# ArrayLab

ArrayLab is a small in-memory array engine I built from scratch in JavaScript to understand how arrays and common array algorithms actually work.

Instead of only using JavaScript's built-in arrays, I wanted to build the basic operations myself, test them, measure them, and understand why some operations are fast while others become expensive as the input grows.

## Why I Built This

Arrays are one of the first data structures we learn, but I wanted to understand what is happening behind the simple operations we use every day.

While building this project, I explored questions like:

- Why is accessing an array element usually `O(1)`?
- Why does inserting at the beginning take `O(n)`?
- What actually happens when a dynamic array becomes full?
- Why is appending to a dynamic array `O(1)` amortized?
- Why is binary search much faster than linear search on sorted data?
- Why do different sorting algorithms behave differently?
- Do real benchmark results actually match the complexity we learn in theory?

The project combines implementation, testing, research, and small performance experiments to answer these questions.

## What I Built

### Static Array

`StaticArray` uses a fixed amount of storage.

It supports:

- Access
- Update
- Insert
- Remove
- Size tracking
- Capacity checking

If the array becomes full, it does not resize.

### Dynamic Array

`DynamicArray` builds on the same basic idea but allows the storage to grow.

It supports:

- Access
- Update
- Insert
- Remove
- Automatic resizing
- Shrinking when the array becomes sparse
- Minimum capacity protection

When the array becomes full, it creates a larger storage area and copies the existing elements into it.

That resize operation is `O(n)`, but resizing only happens occasionally, which makes appending `O(1)` amortized.

## Algorithms

I also implemented and tested common searching and sorting algorithms.

### Searching

#### Linear Search

Linear search checks elements one by one.

- Works with unsorted data
- Best case: `O(1)`
- Average case: `O(n)`
- Worst case: `O(n)`

#### Binary Search

Binary search repeatedly cuts the search space in half.

- Requires sorted data
- Best case: `O(1)`
- Worst case: `O(log n)`

### Sorting

The project currently includes:

- Bubble Sort
- Selection Sort
- Insertion Sort

| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Bubble Sort* | `O(n²)` | `O(n²)` | `O(n²)` | `O(1)` |
| Selection Sort | `O(n²)` | `O(n²)` | `O(n²)` | `O(1)` |
| Insertion Sort | `O(n)` | `O(n²)` | `O(n²)` | `O(1)` |

\*The current Bubble Sort implementation does not use an early-exit optimization, so its best case is `O(n²)`.

One thing I found interesting is that two algorithms can have the same worst-case complexity but still behave differently depending on the input.

For example, Insertion Sort can finish in `O(n)` on an already sorted array because it does very little work. Selection Sort still scans the remaining elements to find the minimum, so it remains `O(n²)`.

## Array Operations and Complexity

| Operation | Complexity |
|-----------|------------|
| Access | `O(1)` |
| Update | `O(1)` |
| Linear Search | `O(n)` |
| Binary Search | `O(log n)` |
| Insert at beginning | `O(n)` |
| Insert in middle | `O(n)` |
| Append | `O(1)` amortized |
| Delete from beginning | `O(n)` |
| Delete from middle | `O(n)` |
| Delete from end | `O(1)`* |
| Resize | `O(n)` |
| Shrink | `O(n)`* |

\*An end deletion is `O(1)` when it does not trigger a shrink. A shrink requires copying elements and therefore takes `O(n)`.

## Experiments

I didn't want to rely only on theoretical Big-O notation, so I created small benchmark scripts to observe how the implementations behave with different input sizes.

The experiments cover:

- Array access
- Linear search
- Binary search
- Array insertion
- Array deletion
- Dynamic array resizing
- Bubble Sort
- Selection Sort
- Insertion Sort

For example, the dynamic array resize experiment tracks how many times the array resizes and how many elements are copied during those resizes.

The results showed that individual resize operations are expensive, but the total amount of copying across many appends grows roughly linearly with the number of elements. This helped me understand why dynamic array append is considered `O(1)` amortized.

## Research

The `research/` directory contains the notes and analysis behind the project.

Topics include:

- Array access
- Linear search
- Binary search
- Array insertion and deletion
- Dynamic array resizing
- Amortized analysis
- Bubble Sort
- Selection Sort
- Insertion Sort
- Sorting algorithm comparison

The research combines the theoretical complexity of each operation with observations from the experiments.

## Testing

The project uses Node's built-in test runner.

The test suite covers normal cases as well as edge cases such as:

- Empty arrays
- Single-element arrays
- Duplicate values
- Invalid indexes
- Full static arrays
- Automatic dynamic resizing
- Multiple resizes
- Shrinking
- Minimum capacity
- Zero capacity
- Negative capacity
- Clearing storage after removal

Current test status:

```text
62 tests
62 passed
0 failed
```

Run the tests with:

```bash
node --test
```

## Project Structure

```text
array-lab/
├── src/
│   ├── algorithms/
│   │   ├── search/
│   │   └── sort/
│   ├── dynamicArray.js
│   └── staticArray.js
│
├── tests/
│   ├── binarySearch.test.js
│   ├── bubbleSort.test.js
│   ├── dynamicArray.test.js
│   ├── insertionSort.test.js
│   ├── linearSearch.test.js
│   ├── selectionSort.test.js
│   └── staticArray.test.js
│
├── experiment/
│   ├── access.js
│   ├── array-insertion.js
│   ├── binary-search.js
│   ├── bubble-sort.js
│   ├── deletion.js
│   ├── insertion-sort.js
│   ├── resizing.js
│   ├── search.js
│   └── selection-sort.js
│
├── research/
│   ├── amortized-analysis.md
│   ├── array-access.md
│   ├── binary-search.md
│   ├── bubble-sort.md
│   ├── insertion-and-deletion.md
│   ├── insertionSort.md
│   ├── linear-search.md
│   ├── resizing.md
│   ├── selection-sort.md
│   └── sorting-comparison.md
│
├── package.json
└── README.md
```

## How to Run

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/riyaaafathima/array-lab.git
cd array-lab
npm install
```

Run the test suite:

```bash
node --test
```

The experiment scripts can be run individually with Node. For example:

```bash
node experiment/resizing.js
node experiment/access.js
node experiment/binary-search.js
```

## Key Takeaways

Building ArrayLab helped me understand that Big-O is not just something to memorize.

The important part is understanding **where the work comes from**.

For example:

- Array access is fast because the index allows direct access.
- Insertion in the middle is expensive because elements have to move.
- Dynamic arrays occasionally pay a large resize cost to keep future appends cheap.
- Binary search is efficient because it repeatedly removes half of the search space.
- Sorting algorithms with the same `O(n²)` worst-case complexity can still behave differently depending on the input.

The biggest takeaway for me was learning to connect the code, the complexity analysis, and the actual behavior I can observe from experiments.

## Future Improvements

Some things I would like to explore next:

- More searching and sorting algorithms
- More detailed benchmark visualization
- Additional array implementations
- Memory usage experiments
- More edge-case tests
- Comparing the custom implementations with JavaScript's built-in `Array`

---

Built as a hands-on learning project to understand data structures, algorithms, and performance through implementation and experimentation.