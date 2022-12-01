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
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;

  let left = 0;
  let right = length - 1;

  for (let i = 0; i <= right; i++) {
    while (i < right && nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]]; // 最大的,直接放最后
      --right;
    }
    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      ++left;
    }
  }
};
// @lc code=end
