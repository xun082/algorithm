/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  s = " " + s;
  p = " " + p;

  const length = s.length;
  const patternLength = p.length;

  // 定义全为 false 的二维数组, dp[i][j] 表示 s 的前 i 个字符能否被 p 的前 j 个字符匹配。
  const dp = [...new Array(length)].map(() =>
    new Array(patternLength).fill(false)
  );

  dp[0][0] = true;

  for (let i = 0; i < length; i++) {
    for (let j = 1; j < patternLength; j++) {
      // 若为 *，p[j] 可以出现0次，不匹配s[i]，即 dp[i][j] = dp[i][j - 1]
      // 也可以匹配掉 s[i], 即 dp[i][j] = dp[i - 1][j]
      if (p[j] === "*") {
        dp[i][j] = dp[i][j - 1] || (i > 0 && dp[i - 1][j]);
      } else {
        const match = i > 0 && (p[j] === s[i] || p[j] === "?");
        dp[i][j] = match && dp[i - 1][j - 1];
      }
    }
  }
  return dp[length - 1][patternLength - 1];
};
// @lc code=end
