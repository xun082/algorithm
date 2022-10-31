/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const row = board.length;
  const col = board[0].length;
  const isValid = (row, col, val) => {
    //首先我们可以计算出它在3x3宫格内的第一个数字的位置
    const r = row - Math.floor(row % 3);
    const c = col - Math.floor(col % 3);
    for (let i = 0; i < 9; i++) {
      //每一行只能出现一次
      if (board[i][col] === val) {
        return false;
      }
      //每一列只能出现一次
      if (board[row][i] === val) {
        return false;
      }
      //对于3*3的宫格，优化
      //Math.floor(i / 3)可以保证每三次都是一样的 对于0,1,2都是0，对于3,4,5都是1
      //i%3 每次都遍历1,2,3
      if (board[r + Math.floor(i / 3)][c + (i % 3)] === val) {
        return false;
      }
    }

    return true;
  };
  const backtrack = (r, c) => {
    //一行遍历完了就遍历下一行
    if (c === col) {
      return backtrack(r + 1, 0);
    }
    //行已经遍历完了说明数独遍历完
    if (r === row) {
      return true;
    }
    //说明当前位置有值，换下一个
    if (board[r][c] !== ".") {
      return backtrack(r, c + 1);
    }
    for (let num = 1; num <= 9; num++) {
      //说明当前数字不能填，换下一个
      if (!isValid(r, c, num + "")) {
        continue;
      }
      board[r][c] = num + "";
      //判断下一个是否能填
      if (backtrack(r, c + 1)) {
        return true;
      }
      //说明填了这个数字不能保证下一个能填只能换下一个数字
      board[r][c] = ".";
    }
  };
  backtrack(0, 0);
  return board;
};

// @lc code=end
