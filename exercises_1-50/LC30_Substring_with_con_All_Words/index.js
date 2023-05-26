/**
 * You are given a string s and an array of strings words. All the strings of words are of the same length. A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated. For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words. Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 is s that is equal to the concatenation of any permutation of words.
We return an empty array.
Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let max = 0;
    max = words.length ? words[0].length * words.length : 0;
    if(s.length < max) return [];
    const find = new Map();
    for(let word of words) {
        find.set(word, (find.get(word) || 0) + 1);
    }
    console.log('find',find);
    let ans = [];
    for(let i = 0; i < s.length - max + 1; i++) {
        const testStr = s.substring(i, i + max);
        if(checkSubString(testStr, find, words[0].length)) ans.push(i);
    }
    return ans;
}

function checkSubString(string, wordMap, wordLength) {
    let hashMap = new Map();
    for(let i = 0; i < string.length; i += wordLength){
        let sub = string.substring(i, i + wordLength);
        hashMap.set(sub, (hashMap.get(sub) || 0 ) + 1);
    }
    for(let [key, val] of  wordMap){
        if(hashMap.get(key) !== wordMap.get(key)) return false;
    }
    return true;
}

// const x = 'wordgoodgoodgoodbestword';
// const y = ["word","good","best","word"];
const x = "barfoothefoobarman";
const y = ["foo","bar"];
console.log(findSubstring(x, y));

// runtime 402 ms
// memory 50.2 MB