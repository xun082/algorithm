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
   * @author xun
   * @method 反转一半数字
   * @timeComplexity O(log N)
   * @spaceComplexity O(1)
   */
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let result = 0;

  while (x > result) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
  // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
  return x === result || x === Math.floor(result / 10);
};
// @lc code=end
