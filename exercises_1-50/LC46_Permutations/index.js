/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    const permutation = (arr, tempArray = []) => { // set recursive function
        if(arr.length === 0) {
            result.push(tempArray); // if all numbers used push new permutation into result array
        } else {
            for(let i = 0; i < arr.length; i++) {
                let currArray = arr.slice(); // copy current array
                let nextArray = currArray.splice(i, 1); // remove 1 number at index i and save it in nextArray, now currArray is one number less
                permutation(currArray.slice(), [...tempArray, ...nextArray]); // new array now currArray after splice - copy, and tempArray joined with nextArray
            }
        }
    }
    permutation(nums);
    return result;  
};

console.log(permute([1,2,3]));

// runtime 76 ms
// memory 45.1 MB
