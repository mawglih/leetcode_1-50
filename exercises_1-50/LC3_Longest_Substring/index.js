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
        console.log('element in hashmap', hashMap.get(s[i]));
        if(hashMap.get(s[i]) >= startIndex) {
            startIndex = hashMap.get(s[i]) + 1;
            console.log('startIndex', startIndex);
        } 
        hashMap.set(s[i], i);
        console.log('hashMap', hashMap);
        longest = Math.max(longest, i - startIndex + 1);
        console.log('longest', longest);
    }
    return longest;
};


const str = 'abcabcbb'
console.log(lengthOfLongestSubstring(str));

// runtime 80 ms
// Memory 45.2 MB