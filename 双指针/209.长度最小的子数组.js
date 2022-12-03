/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// [2, 3, 1, 2, 4, 3]; 7
var minSubArrayLen = function (target, nums) {
  /**
   * @author xun
   * @method 滑动窗口
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;

  let ans = Infinity;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < length) {
    sum += nums[right];

    while (sum >= target) {
      ans = Math.min(ans, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }
  return ans === Infinity ? 0 : ans;
};

// @lc code=end
