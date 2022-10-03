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
  const length = nums.length;

  const result = [];

  for (const num of nums) {
    const x = (num - 1) % length;
    nums[x] += length;
  }

  for (const [index, number] of nums.entries()) {
    if (number <= length) {
      result.push(index + 1);
    }
  }

  return result;
};
// @lc code=end
