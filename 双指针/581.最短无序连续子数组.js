/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const n = nums.length;
  let max = -Number.MAX_VALUE;
  let min = Number.MAX_VALUE;
  let left = -1;
  let right = -1;

  for (let i = 0; i < n; i++) {
    if (max > nums[i]) {
      right = i;
    } else {
      max = nums[i];
    }

    if (min < nums[n - i - 1]) {
      left = n - i - 1;
    } else {
      min = nums[n - i - 1];
    }
  }

  return right === -1 ? 0 : right - left + 1;
};
// @lc code=end
