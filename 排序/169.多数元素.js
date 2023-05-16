/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /**
   * @author xun
   * @method
   * @timeComplexity O(n log n)
   * @spaceComplexity O(log n)
   */
  nums.sort((a, b) => a - b);

  const mid = nums[Math.floor(nums.length / 2)];

  return mid;
};
// @lc code=end
