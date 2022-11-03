/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // return n > 0 && (n & (n - 1)) === 0;
  const BIG = 1 << 30;
  return n > 0 && BIG % n === 0;
};
// @lc code=end
