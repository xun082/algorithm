/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  /**
   * @author xun
   * @method 数学
   * @timeComplexity O(log |s| )
   * @spaceComplexity O(1)
   */

  let result = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);
    result = result * 10 + digit;
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0;
  }
  return result;
};
// @lc code=end
