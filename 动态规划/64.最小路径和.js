/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(mn)
   * @spaceComplexity O(mn)
   */
  let m = grid.length;
  let n = grid[0].length;

  if (n === 0 || m === 0) return 0;

  const path = new Array(m).fill().map(() => new Array(n).fill(0));

  path[0][0] = grid[0][0];

  for (let i = 1; i < n; i++) {
    path[0][i] = path[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < m; i++) {
    path[i][0] = path[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      path[i][j] = Math.min(path[i - 1][j], path[i][j - 1]) + grid[i][j];
    }
  }

  return path[m - 1][n - 1];
};
// @lc code=end
