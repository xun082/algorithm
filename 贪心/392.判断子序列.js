/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  /**
   * @author xun
   * @method 贪心
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) i++;
  }

  return i === s.length;
};
// @lc code=end
