/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zero = -1;
  let length = nums.length;
  let i = 0;

  while (i < length) {
    let temp = undefined;
    if (nums[i] === 0) {
      temp = nums[zero + 1];
      nums[++zero] = nums[i];
      nums[i++] = temp;
    } else if (nums[i] === 2) {
      temp = nums[i];
      nums[i] = nums[length - 1];
      nums[--length] = temp;
    } else {
      i++;
    }
  }

  return nums;
};
// @lc code=end
