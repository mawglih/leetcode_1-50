/**Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned). */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    function checkRange(num) {
        const MAX_NUMBER = Math.pow(2, 31) - 1;
        const MIN_NUMBER = Math.pow(-2, 31);
        return num > MIN_NUMBER && num < MAX_NUMBER;
    }
    let sign = x < 0 ? -1 : 1;
    let rev = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    rev = checkRange(rev) ? rev : 0
    return rev;
};

console.log(reverse(123809809));

// runtime 65 ms
// memory 45 MB