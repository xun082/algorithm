/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  /**
   * @author xun
   * @method 二分查找
   * @timeComplexity O(log N)
   * @spaceComplexity O(1)
   */
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const square = mid * mid;

    if (square < num) left = mid + 1;
    else if (square > num) right = mid - 1;
    else return true;
  }
  return false;
};
// @lc code=end
