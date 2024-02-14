/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  /**
   * @author xun
   * @method 类二分查找
   * @timeComplexity O((logC )
   * @spaceComplexity O((logC)
   */
  const MAX_VALUE = 2 ** 31 - 1;
  const MIN_VALUE = -(2 ** 31);

  if (dividend === MIN_VALUE && divisor === -1) return MAX_VALUE;

  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let result = 0;

  for (let i = 31; i >= 0; i--) {
    if (a >>> i >= b) {
      if (i === 31) {
        a -= MAX_VALUE;
        a -= 1;
        result -= MIN_VALUE;
      } else {
        a -= b << i;
        result += 1 << i;
      }
    }
  }

  return dividend > 0 == divisor > 0 ? result : -result;
};
// @lc code=end
