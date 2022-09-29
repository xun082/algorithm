/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  /**
   * 边界情况
   * x小于0 例如 -111 111-
   * x%10=0 100%10=0  100!==001
   */
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  /**
   *
   * 当数字长度为奇数时,可以通过revertedNumber/10
   * 当数字长度为偶数时,直接判断x === revertedNumber
   *
   */
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
// @lc code=end
