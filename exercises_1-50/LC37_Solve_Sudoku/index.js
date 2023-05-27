/**Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.
 * 
 */
  /**
   * 
   * 
   * Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

      Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
   */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if(!board || board.length === 0) {
        return;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') {
                for (let l = 1; l < 10; l++) {
                    if (isValid(board, i, j, l.toString())) {
                        board[i][j] = l.toString();
                        let solved = solveSudoku(board);
                        if (solved !== false) return solved;   
                        board[i][j] = '.';
                    }
                }
                return false;   
            }
        }
    }
    return board;
};
       
       
const isValid = (board, row, col, c) => {
    for(let i = 0; i < 9; i++) {
        if(board[i][col] == c) return false; //validate colums
        if(board[row][i] == c) return false; // validate rows
        let gridVal = board[3 * Math.floor(row/3) + Math.floor(i/3)][3 * Math.floor(col/3) + i % 3]// 3 * Math.floor(row/3) and 3 * Math.floor(col/3) are the coordinates for the top-left square of the 3x3 grid that the value is in - validate squares
        if (gridVal === c) return false
    }
    return true;
};
const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
       
console.log(solveSudoku(board));

//runtime 118 ms
//memory 42.6 MB