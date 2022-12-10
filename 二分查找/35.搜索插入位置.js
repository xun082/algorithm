/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  /**
   * @author xun
   * @method 二分查找
   * @timeComplexity O(log N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;
  let left = 0;
  let right = length - 1;
  let ans = length;

  while (left <= right) {
    const mid = Math.floor(((right - left) >> 1) + left);
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
// @lc code=end
