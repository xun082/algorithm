/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// [2, 3, 1, 2, 4, 3]; 7
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let i = 0;
  result = nums.length + 1;
  for (let j = 0; j <= nums.length; j++) {
    sum = sum + nums[j];
    while (sum >= target) {
      let length = j - i + 1;
      result = Math.min(result, length);
      sum = sum - nums[i];
      i++;
    }
  }
  return result > nums.length ? 0 : result;
};
// @lc code=end
