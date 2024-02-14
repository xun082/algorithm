/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  /**
   * @author xun
   * @method 二分查找
   * @timeComplexity O(log N)
   * @spaceComplexity O(1)
   */
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(((right - left) >> 1) + left);

    if (nums[mid] < nums[right]) right = mid;
    else left = mid + 1;
  }

  return nums[left];
};
// @lc code=end
