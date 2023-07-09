/**Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x;
    let rev = 0;
    if(x < 0) return false;
    if(x === 0) return true;
    while(temp > 0) {
        let rem = temp % 10; 
        temp = parseInt(temp / 10);
        rev = rev * 10 + rem; 
    }
    return x === rev;
};

console.log(isPalindrome(0));

// runtime 163 ms
// memory 51.3 mb