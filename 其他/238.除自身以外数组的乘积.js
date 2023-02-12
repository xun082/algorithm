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
  /**
   * @author xun
   * @method  其他
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;
  const result = new Array(nums.length).fill(0);

  result[0] = 1;
  for (let i = 1; i < length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= R;
    R *= nums[i];
  }
  return result;
};
// @lc code=end
