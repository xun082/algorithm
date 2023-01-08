/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  /**
   * @author xun
   * @method 贪心算法
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let ans = 0;
  const length = nums.length;
  let start = 0;
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) start = i;

    ans = Math.max(ans, i - start + 1);
  }
  return ans;
};
// @lc code=end
