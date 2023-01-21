/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N**2)
   * @spaceComplexity O(N)
   */
  const length = nums.length;

  const path = new Array(length + 1).fill(1);

  let result = 1;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) path[i] = Math.max(path[i], path[j] + 1);
    }
    result = Math.max(path[i], result);
  }
  return result;
};
// @lc code=end
