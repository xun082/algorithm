/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  /**
   * @author xun
   * @method 滑动窗口
   * @timeComplexity O(N)
   * @spaceComplexity O(K) 其中 k 是判断重复元素时允许的下标差的绝对值的最大值
   */
  const set = new Set();
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (i > k) set.delete(nums[i - k - 1]);
    if (set.has(nums[i])) return true;

    set.add(nums[i]);
  }
  return false;
};
// @lc code=end
