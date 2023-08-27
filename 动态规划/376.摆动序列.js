/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const n = nums.length;

  if (n < 2) return n;

  let up = 1;
  let down = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up = Math.max(up, down + 1);
    } else if (nums[i] < nums[i - 1]) {
      down = Math.max(up + 1, down);
    }
  }

  return Math.max(up, down);
};
// @lc code=end
