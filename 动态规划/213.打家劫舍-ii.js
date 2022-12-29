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
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;

  if (length === 1) return nums[0];
  else if (length === 2) return Math.max(nums[0], nums[1]);
  return Math.max(range(nums, 0, length - 2), range(nums, 1, length - 1));
};

function range(nums, start, end) {
  let first = nums[start];
  let second = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
}

// @lc code=end
