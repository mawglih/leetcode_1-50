/**
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string. Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0'; // edge case to skip calculations
    const result = new Array(num1.length + num2.length).fill(0);
    for(let i = num1.length - 1; i >= 0; i--) {
        for(let j = num2.length - 1; j >= 0; j--) {
            const p1 = i + j; // before last index
            const p2 = i + j + 1; // last index
            let p = result[p2] + Number(num1[i]) * Number(num2[j]) // add multiplication res of 2 digits at i and j to current result[i+j+1]
            result[p2] = p % 10; // leave only remainder of is in p
            result[p1] += parseInt(p / 10); // add to current result[i+j] only integer part of p divided by 10
        }
    }
    if(result.length > 0) { 
        let current = 0;
        for(let i = 0; i < result.length; i++) { // remove extra front '0', cannot use parseint since then will be limited by 2^31
            if(result[i] === 0) {
                current++;
            } else {
                break;
            }
        }
        result.splice(0, current);
    }
    return result.join('');
}

console.log(multiply('123456789', '987654321'));