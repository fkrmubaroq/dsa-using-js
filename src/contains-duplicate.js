/*
  Given an integer array nums , return true  if any value appears at least twice in the array,
  and return false if every element is distinct
*/
//  time complexity O(n)
function containsDuplicate(nums) {
    const obj = new Set();
    for(let i = 0; i<nums.length; i++){
        if(obj.has(nums[i])) return true;
        obj.add(nums[i])
    }
    return false;
}