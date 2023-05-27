 /**
  * Backtracking Template
  * @param {number} n : *Distinct* input elements [1, n]
  * @param {number} k
  * @return {number[][]} : All unordered, unique combinations of size k
  */
 function combine(n, k) {
    const output = [];
    (function backtrack(path = [], start = 1) {
      /** When valid solution is reached, 
       * copy state to new reference before adding to output */
      if (path.length === k) return output.push(path.slice());
  
      /** Enumerate candidates */
      for (let num = start; num <= n; ++num) {
        /** if current candidate is invalid, *prune* its subtree */
        // e.g. if (!valid(num)) continue
  
        /** Backtracking steps: */
        path.push(num); // 1) Mark decision
        backtrack(path, num + 1);  // 2) Explore (dfs)
        path.pop();  // 3) Revert
      }
    })();
    return output;
   }