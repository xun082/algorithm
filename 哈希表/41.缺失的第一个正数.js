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

  if (nums.length === 0) return 1;
  if (nums.length === 1 && nums[0] <= 0) return 1;

  const arr = [];

  for (const value of nums) {
    if (value >= 1) {
      arr[value] = 1;
    }
  }

  if (!arr.length) return 1;

  for (let i = 1; i < arr.length; i++) {
    if (!arr[i]) {
      return i;
    }
  }

  return arr.length;
};
// @lc code=end
