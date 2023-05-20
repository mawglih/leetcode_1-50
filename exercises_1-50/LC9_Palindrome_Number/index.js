/**Given an integer x, return true if x is a palindrome, and false otherwise.

 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x;
    let rev = 0;
    while(temp > 0) {
        let rem = temp % 10; //get the last digit
        temp = parseInt(temp / 10); // remove last digit
        rev = rev * 10 + rem; // add last digit from front or to previous last digit moving previous nimber up by adding 0: * 10
    }
    return x === rev; // if number the same return true
};

console.log(isPalindrome(12234321))