/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);
  // 辅助,1乘以任何数都为1
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = result[i] * product;
    product = product * nums[i];
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * product;
    product = product * nums[i];
  }

  return result;
};
// @lc code=end
