/**Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits. */

/**
 * @param {string}
 * @return {number}
 */
var myAtoi = function(s) {
    let isSignEncountered =  false;
    let sign = 1;
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(/[^0-9]/.test(char)) { // filter all non digits, if digit skip to else
            if(/[a-zA-Z]/.test(char)) { // filter and proceed of it is a letter
                continue;
            } else if ((char === '-' || char === '+') && !isSignEncountered) { // if it is a sign then check isSignEncountered and set if needed sign
                isSignEncountered = true;
                sign = char === '-' ? -1 : 1;
                continue;
            } else if(char = ' ') { // check if it is a whitespace, only before number encountered
                continue;
            }
            // continue;
        } else {
            if(Number.isSafeInteger(result)) { // check for overflow
                result = result * 10 + parseInt(char);
                continue;
            } else {
                break;
            }
        }
    }
    result = result * sign;
    if(result < Math.pow(-2, 31)) {  // check if within signed integer borders
        return Math.pow(-2, 31);
    } else if (result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    } else {
        return result;
    }
}
let phrase = "4193 with words"; //other tests: '42', '     -42', 
console.log(myAtoi(phrase));