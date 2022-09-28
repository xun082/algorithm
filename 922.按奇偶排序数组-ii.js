/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let j = 1;
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 === 1) {
      while (nums[j] % 2 === 1 && j < nums.length) {
        j += 2;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  return nums;
};
// @lc code=end
