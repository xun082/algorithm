/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  /**
   * @author xun
   * @method 二进制
   */
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;
  while (n) {
    if (n & 1) result *= x;
    x *= x;
    n >>>= 1;
  }
  return result;
};
// @lc code=end
