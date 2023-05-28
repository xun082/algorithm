/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const n = nums.length;
  const points = new Array(n + 2);
  points[0] = points[n + 1] = 1;

  for (let i = 1; i <= n; i++) {
    points[i] = nums[i - 1];
  }

  const path = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  for (let i = n; i >= 0; i--) {
    for (let j = i + 1; j < n + 2; j++) {
      for (let k = i + 1; k < j; k++) {
        path[i][j] = Math.max(
          path[i][j],
          path[i][k] + path[k][j] + points[i] * points[j] * points[k]
        );
      }
    }
  }
  return path[0][n + 1];
};
// @lc code=end
