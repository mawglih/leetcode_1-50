/**
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
 */

var threeSumClosest = function(nums, target) {
    if(nums.length <= 3) {
        nums.forEach(element => {
            let sum = 0;
            sum += element;
            return sum;
        });
    }
    nums.sort((a,b) => a - b);
    let closest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            let curSum = nums[i] + nums[left] + nums[right];
            closest = Math.abs(target - closest) < Math.abs(target - curSum) ? closest : curSum;
            if(curSum === target) {
                return curSum;
            } else if(curSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return closest;
}

/**
 * Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

const arr = [-1,2,1,-4];
let n = 1;
console.log(threeSumClosest(arr, n));

// runtime 76 ms
// memory 43.8 MB
