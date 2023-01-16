/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  /**
   * @author xun
   * @method 原地法
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if ((i === 0 || s[i - 1] === " ") && s[i] === " ") result++;
  }

  return result;
};
// @lc code=end
