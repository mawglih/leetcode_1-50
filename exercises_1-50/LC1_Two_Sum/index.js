/**Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { //use hashMap tp splve in O(n)
    let hashMap = new Map();
    let result = []; //array of indices
    for (let i = 0; i < nums.length; i++) {
        let compensator = target - nums[i];
        if(hashMap.has(compensator)) {
            result.push(i, hashMap.get(compensator));
            return result;
        } else {
            hashMap.set(nums[i], i);
        }
    }
    return -1;
}

const arr = [2,7,11,15];
let target = 9;
console.log(twoSum(arr, target));
// Runtime 65ms
// Memory 43.7 MB