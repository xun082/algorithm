/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = nums[0];

  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      ans = ans ^ nums[i];
    }
  }

  return ans;
};
// @lc code=end
