/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  /**
   * @author xun
   * @method 一次遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 1) count++;
    else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  maxCount = Math.max(maxCount, count);

  return maxCount;
};
// @lc code=end
