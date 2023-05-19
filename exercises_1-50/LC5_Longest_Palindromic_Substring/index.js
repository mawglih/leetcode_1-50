// Given a string s, return the longest palindromic substring in s.

/**
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function(string) {
    let longestPal = '';

    var getLongestPalindrome = function (leftPosition, rightPosition) {
        // While there is space to expand, and the expanded strings match
        while (leftPosition >= 0 && rightPosition < string.length && string[leftPosition] === string[rightPosition]) {
            // Expand in each direction.
            leftPosition--;
            rightPosition++;
        }

        // Store the longest palindrom (if it's the longest one found so far)
        if (rightPosition - leftPosition > longestPal.length) {
            longestPal = string.slice(leftPosition + 1, rightPosition);
        }
    };

    // Loop through the letters
    for (let i = 0; i < string.length; i++) {
        // Find the longest odd palindrome
        getLongestPalindrome(i, i + 1);

        // Find the longest even palindrome
        getLongestPalindrome(i, i);

        // Check if a longer palindrome cannot be found
        if ((string.length - i) * 2 < longestPal.length) {
            // Break out to avoid unnecessary computation
            break;
        }
    }
    return longestPal;
};

const str = 'abracarba';

console.log(longestPalindrome(str));