/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(mn)
   * @spaceComplexity O(mn)
   */
  // const path = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // for (let i = 0; i < m; i++) {
  //   path[i][0] = 1;
  // }
  // for (let j = 0; j < n; j++) {
  //   path[0][j] = 1;
  // }
  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     path[i][j] = path[i - 1][j] + path[i][j - 1];
  //   }
  // }
  // return path[m - 1][n - 1];
  /**
   * @author xun
   * @method 组合数学
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let result = 1;
  for (let i = n, j = 1; j < m; ++i, ++j) {
    result = Math.floor((result * i) / j);
  }
  return result;
};
// @lc code=end
