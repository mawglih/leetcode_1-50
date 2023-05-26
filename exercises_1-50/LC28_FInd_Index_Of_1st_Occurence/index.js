/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let pointerH = 0;
    let pointerN = 0;
    let start = 0;
    if(needle.length > haystack.length) return -1;
    while(pointerH < haystack.length) {
        if(needle[pointerN] === haystack[pointerH]) {
            pointerH++;
            pointerN++;
            if(pointerN === needle.length) {
                return pointerH - pointerN;
            }
        } else {
            start++;
            pointerH = start;
            pointerN = 0;
            continue;
        }
    }
    return -1;
}

let s1 = "sanbutsam", s2 = "sad";
console.log(strStr(s1,s2));

// runtime 58 ms
// memory 42 MB