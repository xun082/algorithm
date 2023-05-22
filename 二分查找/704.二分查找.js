/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
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
   * @timeComplexity O(log N)
   * @spaceComplexity O(1)
   */
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;

    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};
// @lc code=end
