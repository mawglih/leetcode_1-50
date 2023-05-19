// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). Arrays need to be merged and then median located based on length of merged array - even or odd.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// simple approach
var findMedianSortedArrays = function(nums1, nums2) {
    let joinedArr = [...nums1, ...nums2].sort((a, b) => a - b);
    if(joinedArr.length % 2 === 0) {
        return ((joinedArr[joinedArr.length / 2 - 1] + joinedArr[joinedArr.length / 2]) / 2).toFixed(5);
    } else {
        return joinedArr[Math.floor(joinedArr.length / 2)].toFixed(5);
    }
};


const arr1 = [1,2];
const arr2 = [3,4];
console.log("1",findMedianSortedArrays(arr1, arr2));

// runtime 103 ms
// memory 48.2 MB

// binary search approach - with start - end pointers
var findMedianSortedArrays2 = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp; // so nums1 is shorter
    }
    let len1 = nums1.length;
    let len2 = nums2.length;
    let start = 0;
    let end = len1;
    while(start <= end) {
        let partition1 = parseInt((start + end) / 2);
        let partition2 = parseInt((len1 + len2 + 1) / 2 - partition1);
        // if partition1 empty  - use MIN_SAFE_INTEGER
        // if partition2 empty - use MAX_SAFE_INTEGER
        let maxLeft1 = partition1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[partition1 - 1];
        let minRight1 = partition1 == len1 ? Number.MAX_SAFE_INTEGER : nums1[partition1];
        let maxLeft2 = partition2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[partition2 - 1];
        let minRight2 = partition2 == len2 ? Number.MAX_SAFE_INTEGER : nums2[partition2];

        if(maxLeft1 <= minRight2 && maxLeft2 <= minRight1) { //position found, calculate median now and return
            if((len1 + len2) % 2 === 0) {
                return ((Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2).toFixed(5);
            } else {
                return (Math.max(maxLeft1, maxLeft2)).toFixed(5);
            }
        } else if (maxLeft1 > minRight2) { // need to go to left
            end = partition1 - 1;
        } else { // need to go to right
            start = partition1 + 1;
        }
    }
};
// runtime 119 ms  - slower than simple one
// Memory 47.1 MB  - worse than simple one

console.log("2", findMedianSortedArrays2(arr1, arr2));