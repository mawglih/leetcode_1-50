/**
 * Given an unsorted integer array nums, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses constant extra space.
Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const temp = [...new Array(nums.length + 1).keys()]; //create array of numbers from 0 to the length of nums, length of temp is 1 greater then nums;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= nums.length && nums[i] > 0) temp[nums[i]] = -1; // if number in nums is positive and smaller then length of nums find it in temp and change it to -1, if there is a missing number it will remain unchanged.
    }
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] > 0) return temp[i]; // return first nchanged number in temp - that is a missing number in nums
    }
    // return temp.length; // no gaps in nums, and 1 is present, so the next positive is number bigger than last member of nums or the length of nums+ 1 or the length of temp - 3 thypes of return:
    // return nums[nums.length - 1] + 1;
    return nums.length + 1;
}

console.log(firstMissingPositive([1,2,3,4,5]));

// runtime 94 ms
// memory 58.8 MB