/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  /**
   * @author xun
   * @method 模拟
   * @timeComplexity O(log num)
   * @spaceComplexity O(1)
   */
  // while (num >= 10) {
  //   let sum = 0;
  //   while (num > 0) {
  //     sum += num % 10;
  //     num = Math.floor(num / 10);
  //   }
  //   num = sum;
  // }
  // return num;
  /**
   * @author xun
   * @method 数学
   * @timeComplexity O(1)
   * @spaceComplexity O(1)
   */
  return ((num - 1) % 9) + 1;
};
// @lc code=end
