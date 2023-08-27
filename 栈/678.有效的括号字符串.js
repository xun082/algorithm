/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  /**
   * @author xun
   * @method 贪心
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let max = 0;
  let min = 0;

  for (const char of s) {
    if (char === "(") {
      max++;
      min++;
    } else if (char === ")") {
      min = Math.max(min - 1, 0);
      if (--max < 0) return false;
    } else {
      min = Math.max(min - 1, 0);
      max++;
    }
  }

  return min === 0;
};
// @lc code=end
