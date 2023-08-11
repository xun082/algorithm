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
  let minCount = 0;
  let maxCount = 0;

  for (const char of s) {
    if (char === "(") {
      maxCount++;
      minCount++;
    } else if (char === ")") {
      minCount = Math.max(minCount - 1, 0);
      if (--maxCount < 0) return false;
    } else {
      minCount = Math.max(minCount - 1, 0);
      maxCount++;
    }
  }
  return minCount === 0;
};
// @lc code=end
