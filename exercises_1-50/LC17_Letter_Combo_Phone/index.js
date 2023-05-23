/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const hashMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  if(digits.length === 0)  return [];
  let result = hashMap[digits[0]].map(d => d);
  if(digits.length === 1) return result;
  for(let i = 1; i < digits.length; i++) {
    const x = digits[i];
    result = result.map(item => hashMap[x].map(letter => item + letter)).flat(1);
  }
  return result;
}

/**
 * Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

console.log(letterCombinations('2345'));

// runtime 59ms 
// memory 41.8 MB
// O(n^2 + k) map has O(n), but the second map acessing constant of 3 letters

// multiple for loops solution

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations2 = function(digits) {
    const hashMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  if(digits.length === 0) return [];
  if(digits.length === 1) return hashMap[digits];

  let result = [''];
  for(let i = 0; i < digits.length; i++) {
    let newArr = [];
    for(let j = 0; j < result.length; j++) {
      for(let letter of hashMap[digits[i]]) {
        newArr.push(result[j].concat(letter))
      }
    }
    if(i == digits.length - 1) {
      return newArr;
    }
      result = newArr;
    }
};

console.log(letterCombinations2('2345'));

// runtime 69ms
// memory 42.4 MB
// O(n^2 + k) ? where k is length of array on hashmap (3)