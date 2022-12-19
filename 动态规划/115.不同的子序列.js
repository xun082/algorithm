/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(mn)
   * @spaceComplexity O(mn)
   */
  const m = s.length;
  const n = t.length;

  if (m < n) return 0;

  const path = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    path[i][n] = 1;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] === t[j]) path[i][j] = path[i + 1][j + 1] + path[i + 1][j];
      else path[i][j] = path[i + 1][j];
    }
  }

  return path[0][0];
};
// @lc code=end
