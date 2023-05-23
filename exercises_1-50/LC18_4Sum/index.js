/**
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums.length < 4) return [];
    let answer = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1;
            let right = nums.length - 1;
            while(left < right) {
                let testSum = nums[i] + nums[j] + nums[left] + nums[right];
                if (testSum === target) {
                    answer.push([nums[i], nums[j], nums[left], nums[right]]);
                    while((nums[left] === nums[left + 1]) && left < right) left++;
                    while((nums[right] === nums[right - 1]) && left < right) right--;
                    left++;
                    right--;
                } else if(testSum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            while(nums[j] === nums[j + 1]) j++;
        }
        while(nums[i] === nums[i + 1]) i++;
    }
    return answer;
}

/**
 * Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 */

const arr = [2,2,2,2,2];

console.log(fourSum(arr, 8));

// runtime 84 ms
// memory 44.4 MB
// O(n^2)