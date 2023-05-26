/**
 * Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.
Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0

 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [-1];
    let maxLength = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(i); // push index i in stack if '(' occured.
        } else {
            stack.pop(); // pop last index if another bracket occurs
            if(stack.length === 0) {
                stack.push(i); // if stack is empty start new
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]); // if stack is not empty after pop(), find differnce between current idex and last index in stack - it will be length of valid parenthesis. Or previous maxLength wins.
            }
        }

    }
    return maxLength;
}

const s = "(()";
console.log(longestValidParentheses(s));
