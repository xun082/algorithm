/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 快慢指针
  if (nums.length === 0) return 0;

  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};
// @lc code=end
