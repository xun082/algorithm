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

  const dp = new Array();
  for (let i = 0; i <= m; i++) {
    const temp = new Array();
    for (let j = 0; j <= n; j++) temp.push(0);

    dp.push(temp);
  }

  for (let i = 0; i <= m; ++i) dp[i][0] = i;

  for (let j = 0; j <= n; ++j) dp[0][j] = j;

  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] =
          1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] - 1);
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
};
// @lc code=end
