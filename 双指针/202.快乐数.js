/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  /**
   * @author xun
   * @method 快慢指针
   * @timeComplexity O(log N)
   * @spaceComplexity O(1)
   */
  function squareSum(n) {
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  let slow = n;
  let fast = squareSum(n);

  while (slow !== fast) {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
  }

  return slow === 1;
};
// @lc code=end
