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
  /**
   * @author xun
   * @method 快慢指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;

  if (length === 0) return 0;

  let fast = 1;
  let slow = 1;

  while (fast < length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }

  return slow;
};
// @lc code=end
