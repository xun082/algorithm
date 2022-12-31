/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  if (n <= 3) return n - 1;
  const path = new Array(n + 1).fill(0);
  path[1] = 1;
  path[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i - j; j++) {
      path[i] = Math.max(path[i], j * (i - j), j * path[i - j]);
    }
  }
  return path[n];
};
// @lc code=end
