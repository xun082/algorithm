/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
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
   * @timeComplexity O(MN)
   * @spaceComplexity O(MN)
   */
  const m = word1.length;
  const n = word2.length;

  const path = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) path[i][0] = i;

  for (let i = 1; i <= n; i++) path[0][i] = i;

  for (let i = 1; i <= m; i++) {
    const str1 = word1[i - 1];

    for (let j = 1; j <= n; j++) {
      const str2 = word2[j - 1];
      if (str1 === str2) path[i][j] = path[i - 1][j - 1];
      else path[i][j] = Math.min(path[i - 1][j], path[i][j - 1]) + 1;
    }
  }

  return path[m][n];
};
// @lc code=end
