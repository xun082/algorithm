/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
   * @author xun
   * @method 二分查找
   * @timeComplexity O(log n)
   * @spaceComplexity O(1)
   */
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor(((right - left) >> 1) + left);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
};
// @lc code=end
