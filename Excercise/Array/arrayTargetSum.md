## **1. Algorithm for Finding Pairs with Target Sum**

### **Input:**
- An array `arr` of numbers.
- A target sum `targetSum`.

### **Output:**
- An array of all pairs `[a, b]` such that `a + b = targetSum`.

---

### **Steps:**
1. **Initialize Variables:**
   - Create an empty array `arrPairs` to store the result pairs.
   - Create a `Set` called `seen` to track numbers already processed.

2. **Iterate Through the Array:**
   - For each number `element` in the array:
     - Calculate its complement: `complement = targetSum - element`.
     - Check if `complement` exists in the `seen` set:
       - If yes, add the pair `[element, complement]` to `arrPairs`.
       - Ensure pairs are consistently formatted (e.g., `[smaller, larger]`).
     - Add `element` to the `seen` set.

3. **Return the Result:**
   - Return `arrPairs`, which contains all pairs that sum up to `targetSum`.

---

### **Time Complexity:**
- **O(n):** Each number is processed once, and `Set` operations (add, check) are constant time.

### **Space Complexity:**
- **O(n):** The `Set` can grow up to the size of the input array.

---

## **2. Logic of the Code**

- **Core Idea:**
  - Use a **complementary number** approach:
    - For a number `x` in the array, check if there is another number `y` such that `x + y = targetSum`.
    - If `y` exists, the pair `[x, y]` is a valid solution.

- **Set-Based Lookup:**
  - Use a `Set` to keep track of processed numbers.
  - This ensures efficient lookups (`O(1)`) to check if the complement exists.

---

## **3. Dry Run of the Code**

#### **Input:**
```javascript
arr = [1, 2, 3, 4, 5], targetSum = 6
```

#### **Execution Steps:**

| **Step** | **Element** | **Complement** | **Seen (Set)**   | **Pairs**         | **Action**              |
|----------|-------------|----------------|------------------|-------------------|-------------------------|
| 1        | 1           | 5              | `{}`             | `[]`              | Add `1` to `seen`.      |
| 2        | 2           | 4              | `{1}`            | `[]`              | Add `2` to `seen`.      |
| 3        | 3           | 3              | `{1, 2}`         | `[]`              | Add `3` to `seen`.      |
| 4        | 4           | 2              | `{1, 2, 3}`      | `[[4, 2]]`        | Add `[4, 2]` to `pairs`.|
| 5        | 5           | 1              | `{1, 2, 3, 4}`   | `[[4, 2], [5, 1]]`| Add `[5, 1]` to `pairs`.|

---

#### **Output:**
```javascript
[[4, 2], [5, 1]]
```

---

## **4. Key Points to Remember**

### **Complementary Numbers**
- For every number `x`, the complement is `targetSum - x`.
- If the complement exists in the processed numbers (`seen` set), you’ve found a valid pair.

---

### **Using a Set for Efficiency**
- A `Set` allows you to:
  - Quickly check if a complement exists (`O(1)`).
  - Avoid iterating over the entire array for every element.

---

### **Avoiding Duplicate Pairs**
- Ensure pairs are consistently represented (e.g., `[smaller, larger]`).
- This avoids storing both `[1, 5]` and `[5, 1]`.

---

### **Common Edge Cases**
1. **Empty Array:**
   - Input: `arr = [], targetSum = 6`
   - Output: `[]`

2. **No Valid Pairs:**
   - Input: `arr = [1, 2, 3], targetSum = 10`
   - Output: `[]`

3. **Multiple Occurrences:**
   - Input: `arr = [1, 2, 3, 3, 4, 5], targetSum = 6`
   - Output: `[[4, 2], [3, 3], [5, 1]]`

---

## **5. Visualization**
Here’s a visual representation of how the `Set` works:

#### Input:
```javascript
arr = [1, 2, 3, 4, 5], targetSum = 6
```

| **Current Number (x)** | **Complement (6 - x)** | **Seen Set**      | **Output Pairs** |
|-------------------------|------------------------|-------------------|------------------|
| 1                       | 5                     | `{1}`             | `[]`             |
| 2                       | 4                     | `{1, 2}`          | `[]`             |
| 3                       | 3                     | `{1, 2, 3}`       | `[]`             |
| 4                       | 2                     | `{1, 2, 3, 4}`    | `[[4, 2]]`       |
| 5                       | 1                     | `{1, 2, 3, 4, 5}` | `[[4, 2], [5, 1]]`|

---

### **6. Revisiting the Code**
When you revisit the code in the future, keep these points in mind:
1. **Complement Calculation:**
   - For each number, find its complement (`targetSum - number`).
2. **Set for Fast Lookup:**
   - Use `Set` to efficiently check if the complement exists.
3. **Unique Pairs:**
   - Always format pairs as `[smaller, larger]` to avoid duplicates.
