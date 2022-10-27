/*
 * @lc app=leetcode.cn id=1822 lang=javascript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1;

  for (const num of nums) {
    if (num === 0) {
      return 0;
    }
    if (num < 0) {
      sign = -sign;
    }
  }

  return sign;
};
// @lc code=end
