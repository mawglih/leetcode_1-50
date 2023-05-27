/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

 Example 2:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    const equalsCheck = (a, b) => a.every((v, i) => v === b[i]);
    const permutation = (arr, tempArray = []) => { // set recursive function
        if(arr.length === 0 && !result.some(res => equalsCheck(res, tempArray))) { // if no duplicates
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
}   

console.log(permuteUnique([1,1,2]))

// runtime 447 ms
// memory 49.3 MB