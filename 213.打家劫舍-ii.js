/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;

  if (length === 0) return 0;
  if (length === 1) return nums[0];

  const result1 = robRange(nums, 0, length - 2);
  const result2 = robRange(nums, 1, length - 1);

  return Math.max(result1, result2);
};

function robRange(nums, start, end) {
  if (end === start) {
    return nums[start];
  }

  const dp = new Array(nums.length).fill(0);

  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[end];
}
// @lc code=end
