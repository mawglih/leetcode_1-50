/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if(bracketMap[i]) {
            stack.push(s[i]);
        } else if(bracketMap[stack.pop()] !== s[i]) {
            return false;
        }
    }
    return stack.length === 0;
}

/**
 * Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const str = '(]';
console.log(isValid(str));

// runtime 56 ms
// memory 42.4 mB