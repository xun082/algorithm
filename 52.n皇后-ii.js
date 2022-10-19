/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let result = 0;
  // 垂直方向的占用情况
  const vertical = [];
  // 水平方向的占用情况
  const horizontal = [];
  // 右倾斜对角线的占用情况
  const diagonalRight = [];
  // 左倾斜对角线的占用情况
  const diagonalLeft = [];

  dfs(n, 0);

  function dfs(n, index) {
    if (n === index) {
      result++;
    }
    for (let i = 0; i < n; i++) {
      if (
        !vertical[i] &&
        !horizontal[index] &&
        !diagonalRight[i + index] &&
        !diagonalLeft[i - index]
      ) {
        vertical[i] = true;
        horizontal[index] = true;
        diagonalRight[i + index] = true;
        diagonalLeft[i - index] = true;

        // 递归
        dfs(n, index + 1);

        vertical[i] = false;
        horizontal[index] = false;
        diagonalRight[i + index] = false;
        diagonalLeft[i - index] = false;
      }
    }
  }

  return result;
};
// @lc code=end
