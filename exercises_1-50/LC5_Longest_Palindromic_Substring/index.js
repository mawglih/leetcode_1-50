/**
 * Given a string s, return the longest palindromic substring  in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let startIndx = 0;
    let maxLength = 1;

   const expandAroundCenter = (left,right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            const currLength = right - left + 1;
            if(currLength > maxLength) {
                maxLength = currLength;
                startIndx = left;
            }
            left--;
            right++;
        }
    }
for(let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
}
let res = s.slice(startIndx, startIndx + maxLength);
return res;
};

const str = 'abracarba';

console.log(longestPalindrome(str));