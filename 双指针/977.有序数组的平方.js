/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  let start = 0;
  let end = nums.length - 1;
  let result = [...nums];

  for (let i = end; i >= 0; i--) {
    if (nums[start] * nums[start] > nums[end] * nums[end]) {
      result[i] = nums[start] * nums[start];
      start++;
    } else {
      result[i] = nums[end] * nums[end];
      end--;
    }
  }
  return result;
};
// @lc code=end
