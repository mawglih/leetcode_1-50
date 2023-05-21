/**Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial). */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

}


const isMatch = (s, p) => {
    if (p.length === 0 && s.length === 0) return true;
    if (p.length === 0) return false;
    const hasFirstCharMatch = s.length > 0 && (p[0] === '.' || p[0] === s[0]);
    if (p[1] === '*') {
        return (
            isMatch(s, p.slice(2)) || 
            (hasFirstCharMatch && isMatch(s.slice(1), p))
        );
    }
    return hasFirstCharMatch ? isMatch(s.slice(1), p.slice(1)) : false;
};

const str = 'aa';
const pat = '.*'
console.log(isMatch(str, pat));

// runtime 1417 ms
// memory 49.2 MB