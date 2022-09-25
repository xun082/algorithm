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
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // 除2
    let mid = Math.floor(left + ((right - left) >> 1));

    if (nums[mid] < target) {
      // 在mid右边继续查找
      left = mid + 1;
    } else if (nums[mid] > target) {
      // 在mid左边继续查找
      right = mid - 1;
    } else {
      // 找到了
      return mid;
    }
  }

  // 没有找到,返回负一
  return -1;
};
// @lc code=end
