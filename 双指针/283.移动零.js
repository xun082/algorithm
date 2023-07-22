/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// [0,1,0,3,12]
// [1,3,12,0,0]
var moveZeroes = function (nums) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let left = 0;
  let right = 0;
  const n = nums.length;

  while (right < n) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
};
// @lc code=end
