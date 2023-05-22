/**Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {   
    if (!strs.length) return '';
    for (let i = 0; i < strs[0].length; i++){
        if(strs.some((word) => word[i] !== strs[0][i])) {
            return strs[0].slice(0, i);
        }
    }
    return strs[0];
}

/**Input: strs = ["flower","flow","flight"]
Output: "fl"
Input: strs = ["flower","flower","flower"]
Output: "flower"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
const strArr = ["dog","racecar","car"]

console.log(longestCommonPrefix(strArr));

// runtime 59 ms
// memory 42.5 MB