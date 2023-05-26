/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r) {
        const m = ~~(l / 2 + r / 2); // binary search to the left
        nums[m] < target ? l = m + 1 : r = m - 1;
    }
    return l;
}

const arr = [1,3,5,6];
console.log(searchInsert(arr,2))

// runtime 56 ms
// memory 41.7 MB