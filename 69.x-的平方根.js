/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = (left + right) >> 1;

    if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return right;
};
// @lc code=end
