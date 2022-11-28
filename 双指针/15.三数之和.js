/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /**
   * @author xun
   * @method 排序+双指针
   * @timeComplexity O(N*N)
   * @spaceComplexity O(log N)
   */
  const result = [];
  const length = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      if (right === i) right--;
      else if (nums[left] + nums[right] + nums[i] === 0) {
        // 命中
        result.push([nums[left], nums[right], nums[i]]);

        while (nums[left] === nums[left + 1]) left++;
        left++;

        while (nums[right] === nums[right - 1]) right--;
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) right--;
      else left++;
    }
  }

  return result;
};
// @lc code=end
