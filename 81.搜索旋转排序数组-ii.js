/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const length = nums.length;

  if (length === 0) return false;

  if (length === 1) return nums[0] === target;

  let right = length - 1;
  let left = 0;

  while (left <= right) {
    let mid = Math.floor(((right - left) >> 1) + left);
    if (nums[mid] === target) {
      return true;
    }

    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      ++left;
      --right;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[length - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
// @lc code=end
