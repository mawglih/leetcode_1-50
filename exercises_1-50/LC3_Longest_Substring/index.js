/**Given a string s, find the length of the longest substring without repeating characters. 
 * 
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hashMap = new Map();
    let longest = 0;
    let startIndex = 0;
    for(let i = 0; i < s.length; i++) {
        if(hashMap.get(s[i]) >= startIndex) {
            // startIndex = hashMap.get(s[i]) + 1;
            startIndex = i + 1;
        } 
        hashMap.set(s[i], i);
        longest = Math.max(longest, i - startIndex + 1);
    }
    return longest;
};



const str = 'abcdabcbbacse'
console.log(lengthOfLongestSubstring(str));

// runtime 80 ms
// Memory 45.2 MB