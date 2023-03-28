/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(MN)
   * @spaceComplexity O(MN)
   */
  const length = s.length;
  const path = new Array(length)
    .fill()
    .map(() => new Array(length).fill(false));

  let result = 0;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j < length; j++) {
      if (s[i] === s[j] && (j - i <= 1 || path[i + 1][j - 1])) {
        result++;
        path[i][j] = true;
      }
    }
  }
  return result;
};
// @lc code=end
