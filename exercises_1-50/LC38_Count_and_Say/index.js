/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251": 23321511

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const hashMap = new Map();
    hashMap.set(1, '1');
    for(let i = 2; i <= n; i++) {
        let prev = hashMap.get(i - 1);
        let newNum = '';
        let count = 1;
        for(let j = 0; j < prev.length; j++) {
            if(prev[j] === prev[j + 1]) {
                count++;
            } else {
                newNum += `${count}${prev[j]}`;
                count = 1;
            }
        }
        hashMap.set(i, newNum);
    }
    return hashMap.get(n);
}

console.log(countAndSay(6));

// runtime 78 ms
// memory 44 MB

