/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;
    let down = true;
    let curr = 1;
    let arr = new Array();
    for(let i = 0; i < numRows; i++) { //create 2-dim array
        arr[i] = new Array();
    }
    //fill array
    for(let i = 0; i < s.length; i++) {
        arr[curr - 1].push(s[i]);
        if(down) {
            curr++;
            if(curr > numRows) {
                curr = numRows - 1;
                down = false;
            }
        } else {
            curr--;
            if( curr < 1) {
                curr = 2;
                down = true;
            }
        }
    }
    let out = ''; // concatenate string
    for (let i = 0; i < numRows; i++) {
        out += arr[i].join('');
    }
    return out;
};

const string = 'AB';
console.log(convert(string, 1));

// runtime 83 ms
// memory 49.5 MB