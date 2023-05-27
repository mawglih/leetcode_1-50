/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: Input: [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length < 3) return 0;
    let trapped = 0;
    let leftMax = -1;
    let rightMax = -1;
    let left = 0;
    let right = height.length - 1;
    while(left <= right) { // set sliding window
        leftMax = height[left] < leftMax ? leftMax : height[left]; // at current left what is bigger previous leftmax or current height[left]
        rightMax = height[right] < rightMax ? rightMax : height[right]; // same as above for right
        if(leftMax < rightMax) { //at current left and right compare which side is higher and go to lower side of window
            trapped += leftMax - height[left]; // at current position (left) since width is 1 no need to multiply area, just deduct what is below surface - height[left]
            left++; //move to the right
        } else {
            trapped += rightMax - height[right]; // at current position (right) since width is 1 no need to multiply area, just deduct what is below surface - height[right]
            right--; // move to the left
        }
    }
    return trapped;
}

console.log(trap([4,2,0,3,2,5]));

// runtime 67 ms
// memory 42.2 MB
