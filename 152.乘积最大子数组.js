/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = -Infinity;

  let currentMax = 1;
  let currentMin = 1;

  for (const num of nums) {
    if (num < 0) {
      [currentMax, currentMin] = [currentMin, currentMax];
    }
    currentMax = Math.max(currentMax * num, num);
    currentMin = Math.min(currentMin * num, num);

    result = Math.max(result, currentMax);
  }

  return result;
};
// @lc code=end
