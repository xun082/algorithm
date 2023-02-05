/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  /**
   * @author xun
   * @method 其他
   * @timeComplexity O(1)
   * @spaceComplexity O(1)
   */
  return n > 0 && 3 ** 19 % n === 0;
};

// @lc code=end
