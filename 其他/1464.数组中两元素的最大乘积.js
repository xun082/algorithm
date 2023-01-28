/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  /**
   * @author xun
   * @method 一次遍历，维护最大和次大值
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let x = nums[0];
  let y = nums[1];

  if (x < y) [x, y] = [y, x];

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > x) {
      y = x;
      x = nums[i];
    } else if (nums[i] > y) {
      y = nums[i];
    }
  }

  return (x - 1) * (y - 1);
};
// @lc code=end
