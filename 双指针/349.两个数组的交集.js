/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  /**
   * @author xun
   * @method 两个集合
   * @timeComplexity O(M + N)
   * @spaceComplexity O(M + N)
   */
  const result = new Set();
  const set = new Set(nums2);

  for (const num of nums1) {
    if (set.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
};
// @lc code=end
