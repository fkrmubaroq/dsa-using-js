/*
    Given an integer array nums and an integer k,
    return the k most frequent elements. You may return the answer in any order.

    Example 1:
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]

    Example 2:
    Input: nums = [1], k = 1
    Output: [1]

    Example 3:
    Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
    Output: [1,2]

    **Constraints:**
    - `1 <= nums.length <= 105`
    - `104 <= nums[i] <= 104`
    - `k` is in the range `[1, the number of unique elements in the array]`.
    - It is **guaranteed** that the answer is **unique**.

    **Follow up:** Your algorithm's time complexity must be better than `O(n log n)`, where n is the array's size.
*/

// Bucket Sort, time complexity O(n)

function v1_topFrequent(nums, k){
  const freq = {};
  for(let num of nums){
    freq[num] = (freq[num] || 0)+ 1
  }
  
  const bucket = Array(nums.length + 1).fill().map(() => []);
  for(let num in freq){
    const count = freq[num];
    bucket[count].push(+num)
  }
  
  const result = [];
  for(let i = bucket.length - 1; i >= 0 && result.length < k; i--){
   
      if(bucket[i].length > 0){
      result.push(...bucket[i])
    }
  }
  return result.slice(0,k)
  
}

// MinHeap + Queue Priority, Time complexity O(n log k)
class MinHeap {
    constructor() {
        this.data = [];
    }

    push(val) {
        this.data.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.data.length === 1) return this.data.pop();

        const smallest = this.data[0];

        // ambil elemen terakhir → taruh ke root
        this.data[0] = this.data.pop();
        this.bubbleDown();

        return smallest;
    }

    bubbleUp() {
        let i = this.data.length - 1;
        const item = this.data[i];

        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            const parent = this.data[parentIndex];

            if (item[0] >= parent[0]) break; // sudah tepat

            // swap
            this.data[i] = parent;
            this.data[parentIndex] = item;

            i = parentIndex;
        }
    }

    bubbleDown() {
        let i = 0;
        const length = this.data.length;
        const item = this.data[0];

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            // cek child kiri
            if (left < length && this.data[left][0] < this.data[smallest][0]) {
                smallest = left;
            }

            // cek child kanan
            if (right < length && this.data[right][0] < this.data[smallest][0]) {
                smallest = right;
            }

            if (smallest === i) break;

            // swap
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
        }
    }

    size() {
        return this.data.length;
    }
}

var topKFrequent = function(nums, k) {
       if (k === nums.length) return nums;

    const count = new Map();
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const heap = new MinHeap();

    for (const [num, freq] of count) {
        heap.push([freq, num]);

        if (heap.size() > k) {
            heap.pop(); // buang yang paling kecil
        }
    }

    return heap.data.map(item => item[1]); // ambil angka saja
};