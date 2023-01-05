/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(MN)
   * @spaceComplexity O(MN)
   */
  const m = text1.length;
  const n = text2.length;

  const path = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1];

      if (c1 === c2) path[i][j] = path[i - 1][j - 1] + 1;
      else path[i][j] = Math.max(path[i - 1][j], path[i][j - 1]);
    }
  }

  return path[m][n];
};
// @lc code=end
