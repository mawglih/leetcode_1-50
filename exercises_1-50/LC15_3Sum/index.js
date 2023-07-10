/**Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1
* Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const equalsCheck = (a, b) => a.every((v, i) => v === b[i]);
    let answer = [];
    if(nums.length < 3) return [];
    nums = nums.sort((a, b)=> a-b);
    for(let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let target = a * (-1);
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            let b = nums[left];
            let c = nums[right];
            let arr = [];
            if(b + c === target) {
                arr.push(a, b, c);
                arr.sort((x,y)=>x-y);
                if (!answer.some(item => equalsCheck(item, arr))) {
                    answer.push(arr);
                }
                left++;
            } else if(b + c < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return answer;
}

/**
 

 */
const arr = [-1,0,1,2,-1,-4];
console.log(threeSum(arr));

// runtime 3424 ms
// memory 83.1 MB
