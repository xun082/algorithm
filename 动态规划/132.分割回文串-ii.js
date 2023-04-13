/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N*N)
   * @spaceComplexity O(N*N)
   */
  const n = s.length;
  const path = new Array(n).fill(0).map(() => new Array(n).fill(true));

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      path[i][j] = s[i] == s[j] && path[i + 1][j - 1];
    }
  }

  const f = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < n; ++i) {
    if (path[0][i]) {
      f[i] = 0;
    } else {
      for (let j = 0; j < i; ++j) {
        if (path[j + 1][i]) {
          f[i] = Math.min(f[i], f[j] + 1);
        }
      }
    }
  }

  return f[n - 1];
};
// @lc code=end
