/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N** 2/3)
   * @spaceComplexity O(N)
   */
  const path = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, path[i - j * j]);
    }
    path[i] = min + 1;
  }

  return path[n];
};
// @lc code=end
