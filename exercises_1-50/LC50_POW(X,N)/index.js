/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 * 
Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n > 0) return pow(x, n);
    if(n < 0) return 1 / pow(x, -n);
}

var pow = function(a,b) {
    if(b === 1) return a;
    if(b === 0) return 1;
    let num = pow(a, ~~(b / 2));
    if(b % 2 === 0) {
        return num * num;
    } else {
        return a * num * num;
    }
}

console.log(myPow(2,4));

// second
var myPow2 = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) return 1 / myPow2(x, -n);
    // n is even : x^n = (x^2)^(n/2);
    if ((n & 1) === 0) return myPow2(x * x, n/2);
    // n is odd : x^n = (x^2)^((n-1)/2) * x;
    return x * myPow2(x * x, (n - 1)/2);
};

console.log(myPow2(2, 4));