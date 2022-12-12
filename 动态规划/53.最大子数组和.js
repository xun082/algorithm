/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let previous = 0;
  let maxAns = nums[0];

  nums.forEach((x) => {
    previous = Math.max(previous + x, x);
    maxAns = Math.max(maxAns, previous);
  });

  return maxAns;
};
// @lc code=end
