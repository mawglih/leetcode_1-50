/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let answer = [-1, -1];
    while(start <= end) {
        const mid = ~~(start / 2 + end / 2); // binary search to the left
        nums[mid] < target ? start = mid + 1 : end = mid - 1;
    }
    if(nums[start] !== target) return answer;
    answer[0] = start;
    end = nums.length - 1;
    while(start <= end) { // binary search to the right
        const mid = ~~(start / 2 + end / 2);
        nums[mid] <= target ? start = mid + 1 : end = mid - 1;
    }
    answer[1] = end;
    return answer;
}
const arr = [5,7,7,8,8,10];
console.log(searchRange(arr, 8));

// runtime 62 ms
// memory 42.2 MB