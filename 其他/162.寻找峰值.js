/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  /**
   * @author xun
   * @method 寻找最大值
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[index]) index = i;
  }

  return index;
};
// @lc code=end
