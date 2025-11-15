// brute force : time complexity O(n^2)
function BF_twoSum(nums,target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

BF_twoSum([1, 2, 7, 10],9);


// Hashmap : time complexity O(n)
function HM_twoSum(nums, target) {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }
        hashMap.set(nums[i], i)

    }
}

const result = twoSum([2, 7, 11, 15], 9);