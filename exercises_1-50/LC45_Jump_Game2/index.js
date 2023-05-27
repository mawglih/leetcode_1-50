/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

Example 1:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [2,3,0,1,4]
Output: 2

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let count = 0;
    let maxDistance = 0;
    let temp = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        temp = Math.max(temp, i + nums[i]); // what is bigger: previous temp index of max jump or new sum of index and number at that index - new index where you can be if jumping from here
        if(i === maxDistance) { //you reached max index on previous jump and it is time to do new jump
            count++;
            maxDistance = temp; // save new index where you can reach from here
            if(maxDistance >= nums.length - 1) return count; // early break out the loop
        }
    }
    return count; // if loop finished and no result found
}

const arr = [2,3,0,1,4];
console.log(jump(arr));

// runtime 61 ms
// memory 44 MB
