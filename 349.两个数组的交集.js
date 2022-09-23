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
  const result = new Set();

  const set = new Set(nums2);

  for (num of nums1) {
    //   数组搜索值,复杂度O(n)
    // set map -.has 复杂度O(1)
    // if (nums2.includes(num)) {
    //   result.add(num);
    // }

    if (set.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
};
// @lc code=end
