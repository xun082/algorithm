/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(mn)
   * @spaceComplexity O(mn)
   */
  const m = word1.length;
  const n = word2.length;

  const path = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) path[i][0] = i;
  for (let i = 0; i <= n; i++) path[0][i] = i;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        path[i][j] = path[i - 1][j - 1];
      } else {
        path[i][j] =
          Math.min(path[i - 1][j], path[i][j - 1], path[i - 1][j - 1]) + 1;
      }
    }
  }
  return path[m][n];
};
// @lc code=end
