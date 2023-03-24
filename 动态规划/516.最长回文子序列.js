/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const length = s.length;
  const path = new Array(length).fill(0).map(() => new Array(length).fill(0));

  for (let i = length - 1; i >= 0; i--) {
    path[i][i] = 1;
    const c1 = s[i];
    for (let j = 1 + i; j < length; j++) {
      const c2 = s[j];
      if (c1 === c2) {
        path[i][j] = path[i + 1][j - 1] + 2;
      } else {
        path[i][j] = Math.max(path[i + 1][j], path[i][j - 1]);
      }
    }
  }
  return path[0][length - 1];
};
// @lc code=end
