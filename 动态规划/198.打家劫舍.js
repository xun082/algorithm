/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let path = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    path[i] = Math.max(path[i - 1], path[i - 2] + nums[i]);
  }

  return path[nums.length - 1];
};
// @lc code=end
