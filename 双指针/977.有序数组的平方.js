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
  let left = 0;
  let right = nums.length - 1;
  const n = right;
  const result = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    const rightAbs = nums[right] * nums[right];
    const leftAbs = nums[left] * nums[left];
    if (leftAbs > rightAbs) {
      result[n - i] = leftAbs;
      left++;
    } else {
      result[n - i] = rightAbs;
      right--;
    }
  }

  return result;
};
// @lc code=end
