/*
    Given an integer array nums and an integer k , 
    return true  if there are two distinct indices i and j  
    in the array such nums[i] === nums[j]  and abs(i - j) ≤ k 
*/

// Hashmap, Time complexity O(n)
function Map_containsNearbyDuplicate(nums, k) {
    const map = new Map();
    for(let i = 0; i<nums.length; i++){
        if(map.has(nums[i])){
            const j = map.get(nums[i]);
            if(Math.abs(i - j) <= k){
                return true;
            }
        }
        map.set(nums[i],i)
    }

    return false
};

// Hashset sliding window O(k)
function Set_containsNearbyDuplicate(nums, k) {
    const setD = new Set();
    for(let i = 0; i<nums.length; i++){
        if(setD.has(nums[i])) return true;
        setD.add(nums[i]);
        if(setD.size > k){
            setD.delete(nums[i - k])
        }
    }
    return false
}