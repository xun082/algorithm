/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  /**
   * @author xun
   * @method 其他
   * @timeComplexity O(MN)
   * @spaceComplexity O(1)
   */
  const m = matrix.length;
  const n = matrix[0].length;

  let flag = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) flag = true;

    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }

    if (flag) matrix[i][0] = 0;
  }
};
// @lc code=end
