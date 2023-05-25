/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // Using backtracking and DFS
    let res = [];
    
    const dfs = (str, open, close) => {
        // Backtracking case: number of ')' can't be more than number of '('
        if (open < close) return;
        
        // Base case: there are n number of open and close parenthesis
        if (open === n && close === n) {
            res.push(str);
            console.log('res', res);
            return;
        }
        
        // DFS traversal
        if (open < n) dfs(str + '(', open + 1, close);
        if (close < n) dfs(str + ')', open, close + 1);
    }
    
    dfs('', 0, 0);
    console.log('final', res)
    return res;
};

console.log(generateParenthesis(4));


//runtime 66 ms
// memory 43.9 mb