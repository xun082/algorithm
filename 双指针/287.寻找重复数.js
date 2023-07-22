/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  /**
   * @author xun
   * @method 快慢指针
   * @timeComplexity O(n))
   * @spaceComplexity O(1)
   */
  let slow = nums[0];
  let fast = nums[nums[0]];
``
  // 第一次相遇
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
// @lc code=end
