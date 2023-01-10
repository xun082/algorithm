/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  /**
   * @author xun
   * @method 原地修改
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;

  for (const num of nums) {
    const x = (num - 1) % length;
    nums[x] += length;
  }

  const result = [];
  for (const [i, num] of nums.entries()) {
    if (num <= length) result.push(i + 1);
  }

  return result;
};
// @lc code=end
