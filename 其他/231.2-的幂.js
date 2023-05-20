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
  /**
   * @author xun
   * @method 判断是否为最大 22 的幂的约数
   * @timeComplexity O(1)
   * @spaceComplexity O(1)
   */
  const BIG = 1 << 30;
  return n > 0 && BIG % n === 0;
};
// @lc code=end
