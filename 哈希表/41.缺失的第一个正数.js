/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] <= 0) nums[i] = length + 1;
  }

  for (let i = 0; i < length; i++) {
    let x = Math.abs(nums[i]);
    if (x >= 1 && x <= length) {
      nums[x - 1] = nums[x - 1] < 0 ? nums[x - 1] : -nums[x - 1];
    }
  }

  for (let i = 0; i < length; i++) {
    if (nums[i] >= 0) return i + 1;
  }
  return length + 1;
};
// @lc code=end
