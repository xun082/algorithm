/*
 * @lc app=leetcode.cn id=2765 lang=javascript
 *
 * [2765] 最长交替子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  /**
   * @author xun
   * @method 单层循环
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let res = -1;
  const n = nums.length;
  let firstIndex = 0;

  for (let i = 1; i < n; i++) {
    const length = i - firstIndex + 1;
    if (nums[i] - nums[firstIndex] === (length - 1) % 2) {
      res = Math.max(res, length);
    } else {
      if (nums[i] - nums[i - 1] === 1) {
        firstIndex = i - 1;
        res = Math.max(res, 2);
      } else {
        firstIndex = i;
      }
    }
  }

  return res;
};
// @lc code=end
