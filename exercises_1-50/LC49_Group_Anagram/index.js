/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = [];
    const map = new Map();
    let index = -1;
    for(let i = 0; i < strs.length; i++) {
        let temp = strs[i].split('').sort().join('');
        if(map.has(temp)) {
            let idx = map.get(temp);
            res[idx].push(strs[i]);
        } else {
            index += 1;
            map.set(temp, index);
            res[index] = [strs[i]];
        }
    }
    return res;
}

const arr = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(arr));

// runtime 114 ms
// memory 52.5 MB