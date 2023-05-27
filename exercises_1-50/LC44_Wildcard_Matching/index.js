/**
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let arr = new Array(s.length + 1);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(p.length + 1).fill(false); // create a 2D array with s.length+1 rows and p.length+1 columns
    }
    arr[0][0] = true; // the first box is true because there is nothing to compare yet
    for (let j = 1; j <= p.length; j++) { // loop through all the columns in the first row
      if (p[j - 1] === '*') {    // if there is a * in the pattern, the current box is true if the previous box is true
        arr[0][j] = arr[0][j - 1];
      }
    }
    for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= p.length; j++) {  // loop through all the rows and columns starting from the second row and column
        if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) { // if there is a ? in the pattern or the characters match, the current box is true, if the previous row's previous column's box is true
          arr[i][j] = arr[i - 1][j - 1];
        } else if (p[j - 1] === '*') {   // if there is a * in the pattern, the current box is true if the previous column's box is true or the previous row's box is true
          arr[i][j] = arr[i][j - 1] || arr[i - 1][j];
        }
      }
    }
    return arr[s.length][p.length];     // return the bottom right box, which is the answer
};

const str = 'aa';
const match = '*';
console.log(isMatch(str, match));

//runtime 152 ms
// memory 55.5 MB
