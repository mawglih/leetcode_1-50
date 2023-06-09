/**You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container. */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxAreaCovered = 0;
    while(left < right) {
        let currentHigh = Math.min(height[left], height[right]);
        let currMax = currentHigh * (right - left);
        maxAreaCovered = maxAreaCovered < currMax ? currMax : maxAreaCovered;
        if(height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxAreaCovered;
}

const arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));

// runtime 82 ms
// memory 50.1 mb

//same but concise

var maxArea = function(height) {
    let maxArea = 0, l = 0, r = height.length - 1;
    while(l < r){
        maxArea = Math.max(maxArea, Math.min(height[l],height[r]) * (r - l))
        height[l] < height[r] ? l++ : r--       
    }
    return maxArea;
};