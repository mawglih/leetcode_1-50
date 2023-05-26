/**
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

+++++++++
1. We iterate through given array from the back. We look for the first dip because that is where we can swap numbers and make our number greater.
2. However, simply swapping adjacent numbers when a dip is found isn't sufficient.
ex) Given 1 2 6 8 7, next greater number isn't 1 2 8 6 7. It's 1 2 7 6 8. 
3. We consider the first dip as the pivot. Then, we iterate again from the back. The first number greater than
pivot will be swapped with the pivot. This logic works because all numbers up to the pivot (the first dip) are in descending order.
4. Then, we reverse arr[pivot+1...end] because we want to change these numbers from descending order to ascending order.
This allows us to get the next greater number. The swap doesn't change the descending order of arr[pivot+1...end].
+++++=

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]

 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let pointer = -1;
    for(let i = nums.length - 1; i > 0; i--) {
        if(nums[i] > nums[i - 1]) {
            pointer = i - 1;
            console.log('pointer2', pointer);
            break;
        }
    }
    console.log('pointer1', pointer);
    if(pointer === -1) {
        nums.sort((a, b) => a - b);
        return nums;
    }
    for(let i = nums.length - 1; i > pointer; i--) {
        console.log('pointer3', pointer);
        if(nums[i] > nums[pointer]) {
            swapArrayItems(nums, i, pointer);
            break;
        }
    }

    for (let i = pointer + 1, j = nums.length - 1; i < j; i++, j--) {
        swapArrayItems(nums, i, j);
    }
    return nums;
    
};
function swapArrayItems(array, i, j) {
    console.log('swao', i, j);
    [array[i], array[j]] = [array[j], array[i]]
    return array;
}

console.log(nextPermutation([1,3,2]));
// runtime 75ms
// memory 43.6 mb